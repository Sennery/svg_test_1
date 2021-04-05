<template>
    <div 
        class="container"
    >
        <svg viewBox="0 0 225 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M112.5 10L106.216 4.41379C103.384 1.89661 99.1163 1.89661 96.2845 4.41379V4.41379C92.9397 7.38692 92.9397 12.6131 96.2845 15.5862V15.5862C99.1163 18.1034 103.384 18.1034 106.216 15.5862L112.5 10ZM112.5 10L118.784 15.5862C121.616 18.1034 125.884 18.1034 128.716 15.5862V15.5862C132.06 12.6131 132.06 7.38692 128.716 4.41379V4.41379C125.884 1.89661 121.616 1.89665 118.784 4.41383C116.842 6.14054 114.978 7.79737 112.5 10Z" stroke="black" stroke-width="2" stroke-dasharray="0 52 0">
                <animate
                    id="appearence" 
                    attributeName="stroke-dashoffset" 
                    values="0;104;"
                    dur="1" 
                    repeatCount="indefinite"
                    keySplines=".25 .1 .25 1;"
                    calcMode="spline"
                    end="click"
                    fill="freeze"
                />
                <animate
                    attributeName="stroke-width"
                    values="0;2;1;0"
                    begin="appearence.begin"
                    end="appearence.end"
                    dur="1"
                    repeatCount="indefinite"
                    keySplines=".25 .1 .25 1;
                                .25 .1 .25 1;
                                .25 .1 .25 1"
                    calcMode="spline"
                />
            </path>
        </svg>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
    }
}
</script>

<style scoped>
.container {
    display: flex;
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

.loader {
    width: 100vw;
    height: 15vh;
}
</style>
