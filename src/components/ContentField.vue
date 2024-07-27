<template>
    <div class="container contentfield">
        <div class="card">
        <div class="card-body">
            <slot></slot>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContentField',
    components: {
        
    }
}
</script>

<style scoped>
.contentfield{
    margin-top: 20px;
}
</style>