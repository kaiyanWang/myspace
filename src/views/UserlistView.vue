<template>
  <ContentField>
    <div class="card" v-for="user in users" :key="user.id" @click="open_user_space(user.id)">
      <div class="card-body">
        <div class="row">
          <div class="col-1 img-field">
            <img :src="user.photo" alt="" class="img-fluid">
          </div>
          <div class="col-11">
            <div class="username">{{ user.username }}</div>
            <div class="follow-count">{{ user.followerCount }}</div>
            
          </div>
        </div>
      </div>
    </div>
  </ContentField>
</template>

<script>
import ContentField from '@/components/ContentField.vue';
import $ from 'jquery';
import { ref } from 'vue';
import router from '@/router/index';
import { useStore } from 'vuex';  
export default {
  name: 'UserlistView',
  components: {
    ContentField
  },
  setup() {
    const store = useStore();
    let users = ref([]);

    $.ajax({
      url: 'https://app165.acapp.acwing.com.cn/myspace/userlist/',
      type: 'get',
      success(resp) {
        users.value = resp;
      }
    });

    const open_user_space = userID => {
      if(store.state.user.is_login){
        router.push({
          name: 'userspace', 
          params: {
            userID
          }
        })
      } else {
        router.push({
          name: 'login'
        });
      }
    }
    return {
      users,
      open_user_space
    };
  }
}
</script>

<style scoped>
img {
  border-radius: 50px;
}
.username {
  font-weight: bold;
  height: 50%;
}
.follow-count {
  font-size: 12px;
  color: grey;
  height: 50%;
}
.card {
  margin-bottom: 20px;
  cursor: pointer;
}
.card:hover {
  box-shadow: 2px 2px 10px lightgrey;
  transition: 500ms;
}
.img-field {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>