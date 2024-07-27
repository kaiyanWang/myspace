<template>
    <div class="card">
        <div class="card-body">
            <div v-for="post in posts.posts" :key="post.id">
                <div class="card sigle-post">
                    <div class="card-body">{{ post.content }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UserspacePosts',
    props: {
        posts: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.sigle-post {
    margin-bottom: 10px;
}
</style>