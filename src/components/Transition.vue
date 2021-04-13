<template>
    <div>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="svg"
        >
            <filter id="transitionFilter" x="0" y="0" width="100%" height="100%">
                <feImage xlink:href="/1234.jpg" x="-50%" y="-50%" width="200%" height="200%" result='img1'/>
                <feTurbulence type="fractalNoise" baseFrequency="0.03 0.001" numOctaves="3" result="warp"/>
                <feDisplacementMap xChannelSelector="B" yChannelSelector="B" scale="100" in="SourceGraphic" in2="img1"/>
            </filter>
        </svg>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.svg {
    height: 100vh;
    width: 100vw;
}
</style>