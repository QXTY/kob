<template>
    <div ref="parent" class="gamemap">
        <!-- 画布 -->
        <canvas ref="canvas"></canvas>
    </div>
</template>

<script>
import { GameMap } from '@/assets/js/GameMap';
import { ref, onMounted} from 'vue';

export default {
    setup() {
        let parent = ref(null);
        let canvas = ref(null);

        onMounted(() => {
            new GameMap(canvas.value.getContext('2d'), parent.value );
        })

        return {
            parent,
            canvas
        }
    }
}
</script>

<style scoped>
div.gamemap {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
