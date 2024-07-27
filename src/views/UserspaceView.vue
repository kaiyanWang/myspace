<template>
  <ContentField>
    <div class="row">
        <div class="col-3">
            <UserspaceInfo @follow123="follow" @unfollow123="unfollow" :user="user" />
            <UserspaceWrite @post_a_post="post_a_post" />
        </div>
        <div class="col-9">
            <UserspacePosts :posts="posts" />
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


export default {
  name: 'UserspaceView',
  components: {
    ContentField,
    UserspaceInfo,
    UserspacePosts,
    UserspaceWrite
  },

  setup() {
    const user = reactive({
        id: 1,
        username: "wangkaiyan",
        lastname: "Wang",
        firstname: "Kaiyan",
        followersCount: 0,
        is_followed: false,
    });

    const posts = reactive({
        counts: 3,
        posts: [
            {
                id: 1,
                userID: 1,
                content: "Web课1"
            },
            {
                id: 2,
                userID: 1,
                content: "Web课2"
            },
            {
                id: 2,
                userID: 1,
                content: "Web课3"
            },
        ]
    });

    const follow = () => {
        if(user.is_followed) return;
        user.is_followed = true;
        user.followersCount ++;
    };

    const unfollow = () => {
        if(!user.is_followed) return;
        user.is_followed = false;
        user.followersCount --;
    };

    const post_a_post = (content) => {
        posts.counts ++;
        posts.posts.unshift({
            id: posts.counts,
            userID: 1,
            content: content
        })
    }

    return {
        user,
        follow,
        unfollow,
        posts,
        post_a_post
    }
  }
}
</script>