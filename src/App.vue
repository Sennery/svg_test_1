<template>
    <div id="app">
        <Loader/>
        <Lines/>
    </div>
</template>

<script>
import Loader from './components/Loader.vue'
import Lines from './components/Lines.vue'

export default {
    name: 'App',
    components: {
        Loader,
        Lines
    }
}
</script>

<style>
html {
    font-family: "Anodina", sans-serif;
    font-size: 1vw;
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
