<template>
    <div id="app" @mousemove="mouseMove">
        <Loader/>
        <Lines 
            :mouse="mouse"
        />
        <Works/>
    </div>
</template>

<script>
import Loader from './components/Loader.vue'
import Lines from './components/Lines.vue'
import Works from './components/Works.vue'

export default {
    name: 'App',
    components: {
        Loader,
        Lines,
        Works
    },
    data() {
        return {
            mouse: {
                x: 0,
                y: 0
            }
        }
    },
    methods: {
        mouseMove(e) {
            this.mouse.x = e.pageX;
            this.mouse.y = e.pageY;
        }
    }
}
</script>

<style>
html {
    font-family: "Anodina", sans-serif;
    font-size: 1vw;    
    margin: 0;
    padding: 0;
}
@font-face {
    font-family: "Anodina";
    src: url("assets/fonts/Anodina-Light.otf");
    font-weight: normal;
}
@font-face {
    font-family: "Anodina";
    src: url("assets/fonts/Anodina-ExtraBold.otf");
    font-weight: bold;
}
</style>
