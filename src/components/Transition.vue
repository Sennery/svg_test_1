<template>
    <div>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="svg"
        >
            <filter id="transitionFilter" x="-50%" y="-50%" width="200%" height="200%">
                <feImage 
                    xlink:href="/2.jpg" 
                    x="-50%" 
                    y="-50%" 
                    width="200%" 
                    height="200%" 
                    result='img1'
                />                
                <feTurbulence  
                    type="fractalNoise"
                    baseFrequency="0.02 0.002" 
                    numOctaves="3" 
                    result="warp"
                />                
                <feDisplacementMap 
                    xChannelSelector="R" 
                    yChannelSelector="R" 
                    :scale="scale" 
                    in="SourceGraphic" 
                    in2="fil"
                />
            </filter>
        </svg>
    </div>
</template>

<script>
export default {
    props: {
        scroll: {
            type: Object
        }
    },
    data() {
        return {

        }
    },
    computed: {
        scale() {
            return Math.pow(this.scroll.partOfMax, 2) * 500;
        }
    }
}
</script>

<style>
.svg {
    position: fixed;
    height: 100vh;
    width: 100vw;
    z-index: -999999;
}
</style>