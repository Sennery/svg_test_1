<template>
    <div 
        class="container"
    >
        <div
            class="signs"
        >
            <svg 
                class="loader" 
                viewBox="0 0 41 20" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                v-for="(elem, i) in signs"
                :key="i"
                :style="{ 
                    transform: 'translate(' + elem.transform.x + 'vw ,' + elem.transform.y + 'vh)' +
                        'scale(' + findScale(elem.transform.x, elem.transform.y) + ')' 
                }"
            >
                <path d="M20.5 10L14.2155 4.41379C11.3837 1.89661 7.11631 1.89661 4.28448 4.41379V4.41379C0.939715 7.38692 0.939714 12.6131 4.28448 15.5862V15.5862C7.11631 18.1034 11.3837 18.1034 14.2155 15.5862L20.5 10ZM20.5 10L26.7845 15.5862C29.6163 18.1034 33.8837 18.1034 36.7155 15.5862V15.5862C40.0603 12.6131 40.0603 7.38692 36.7155 4.41379V4.41379C33.8837 1.89661 29.6163 1.89665 26.7844 4.41383C24.8419 6.14054 22.978 7.79737 20.5 10Z" stroke="black" stroke-width="2" stroke-dasharray="0 52 0">
                    <animate
                        :id="i" 
                        attributeName="stroke-dashoffset" 
                        values="0;104;"
                        :dur="duration" 
                        :repeatCount="(i == 0) ? 'indefinite' : 1"
                        :keySplines="elem.timeFunc"
                        calcMode="spline"
                    />
                    <animate
                        attributeName="stroke-width"
                        values="0;2;0"
                        :begin="i + '.begin'"
                        :end="i + '.end'"
                        :dur="duration"
                        :repeatCount="(i == 0) ? 'indefinite' : 1"
                        keySplines=".25 .1 .25 1;
                                    .12 0 .39 0;"
                        calcMode="spline"
                    />
                </path>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Loader',
    props: {
    },
    data() {
        return {
            duration: 1,

            signs: [                
                {
                    timeFunc: '.11 0 .5 0;',
                    transform: {
                        x: '0',
                        y: '0',  
                    }
                },
                {
                    timeFunc: '.45 0 .55 0;',
                    transform: {
                        x: '+35',
                        y: '-15',
                    }
                },
                {
                    timeFunc: '.25 .1 .25 1;',
                    transform: {
                        x: '20',
                        y: '15',
                    }
                },
                {
                    timeFunc: '.7 0 .84 0;',
                    transform: {
                        x: '-10',
                        y: '-35',
                    }
                },
                {
                    timeFunc: '.85 0 .15 0;',
                    transform: {
                        x: '-20',
                        y: '30', 
                    }
                },
                {
                    timeFunc: '.16 1 .3 1;',
                    transform: {
                        x: '-35',
                        y: '-15',
                    }
                },
            ]
        }
    },
    methods: {
        findScale(x,y) {
            const scale = 1 - (Math.abs(x) + Math.abs(y))/100;
            return scale;
        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
    left: 0;
}

.signs {
    height: 15vh;
    width: 30.75vh;
}

.loader {
    position: absolute;
    height: 15vh;
    transition: transform 0.5s cubic-bezier(0.65, 0, 0.35, 1);
}
</style>
