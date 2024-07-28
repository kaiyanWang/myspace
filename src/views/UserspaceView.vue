<template>
  <ContentField>
    <div class="row">
        <div class="col-3">
            <UserspaceInfo @follow="follow" @unfollow="unfollow" :user="user" />
            <UserspaceWrite v-if="is_me" @post_a_post="post_a_post" />
        </div>
        <div class="col-9">
            <UserspacePosts :user="user" :posts="posts" @delete_a_post="delete_a_post" />
        </div>
    </div>
  </ContentField>
</template>

<script>
import ContentField from '@/components/ContentField.vue';
import UserspaceInfo from '@/components/UserspaceInfo.vue';
import UserspacePosts from '@/components/UserspacePosts.vue';
import UserspaceWrite from '@/components/UserspaceWrite.vue';
import { reactive } from 'vue';
import { useRoute } from 'vue-router';
import $ from 'jquery';
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  name: 'UserspaceView',
  components: {
    ContentField,
    UserspaceInfo,
    UserspacePosts,
    UserspaceWrite
  },

  setup() {
    const store = useStore();
    const route = useRoute();
    const userID = parseInt(route.params.userID);

    const user = reactive({});
    const posts = reactive({});

    $.ajax({
        url: 'https://app165.acapp.acwing.com.cn/myspace/getinfo/',
        type: 'get',
        data: {
            user_id: userID,
        },
        headers: {
            'Authorization': "Bearer " + store.state.user.access,
        },
        success(resp) {
            user.id = resp.id;
            user.username = resp.username,
            user.photo = resp.photo,
            user.followerCount = resp.followerCount;
            user.is_followed = resp.is_followed;

        }
    });

    $.ajax({
        url: "https://app165.acapp.acwing.com.cn/myspace/post/",
        type: "get",
        data: {
            user_id: userID
        },
        headers: {
            'Authorization': "Bearer " + store.state.user.access,
        },
        success(resp) {
            posts.counts = resp.length;
            posts.posts = resp;
        }
    });



    const follow = () => {
        if(user.is_followed) return;
        user.is_followed = true;
        user.followerCount ++;
    };

    const unfollow = () => {
        if(!user.is_followed) return;
        user.is_followed = false;
        user.followerCount --;
    };

    const post_a_post = content => {
        posts.counts ++;
        posts.posts.unshift({
            id: posts.counts,
            userID: 1,
            content: content
        })
    };

    const delete_a_post = post_id => {
        posts.posts = posts.posts.filter(post => post.id !== post_id);
        posts.counts = posts.posts.length;
    }


    const is_me = computed(() => userID === store.state.user.id);

    return {
        user,
        follow,
        unfollow,
        posts,
        post_a_post,
        is_me,
        delete_a_post,
    }
  }
}
</script>