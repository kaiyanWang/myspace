<template>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-3">
                    <img src="@/assets/images/my.jpg" class="img-fluid" alt="...">
                </div>
                <div class="col-9">
                    <div class="username">{{ fullname }}</div>
                    <div class="fans">粉丝：{{ user.followersCount }}</div>
                    <button @click="follow" v-if="!user.is_followed" type="button" class="btn btn-secondary">+关注</button>
                    <button @click="unfollow" v-if="user.is_followed" type="button" class="btn btn-secondary">取消关注</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';

export default {
    name: 'UserspaceInfo',
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    setup(props, context) {
        let fullname = computed(() => props.user.lastname + ' ' +props.user.firstname);

        const follow = () => {
            context.emit('follow123');
        };

        const unfollow = () => {
            context.emit('unfollow123');
        };

        return {
            fullname,
            follow,
            unfollow
        }
    }
}
</script>

<style scoped>
img {
    border-radius: 50px;
}
.username {
    font-weight: bold;
}
.fans {
    font-size: 12px;
    color: grey;
}
button{
    padding: 2px 4px;
    font-size: 12px;
}
</style>