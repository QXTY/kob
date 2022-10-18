<template>
    <PlayGround/>
</template>

<script>
    import PlayGround from '@/components/PlayGround.vue'
    
    export default {
        components: {
            PlayGround,
        },
        setup() {
            
        }
    }
</script>

<style scoped>
    div.playground {
        width: 60vw;
        height: 70vh;
        margin: 40px auto;
    }
</style>