<template>
    <div 
        class="container"
    >
        <svg class="loader" viewBox="0 0 41 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.5 10L14.2155 4.41379C11.3837 1.89661 7.11631 1.89661 4.28448 4.41379V4.41379C0.939715 7.38692 0.939714 12.6131 4.28448 15.5862V15.5862C7.11631 18.1034 11.3837 18.1034 14.2155 15.5862L20.5 10ZM20.5 10L26.7845 15.5862C29.6163 18.1034 33.8837 18.1034 36.7155 15.5862V15.5862C40.0603 12.6131 40.0603 7.38692 36.7155 4.41379V4.41379C33.8837 1.89661 29.6163 1.89665 26.7844 4.41383C24.8419 6.14054 22.978 7.79737 20.5 10Z" stroke="black" stroke-width="2" stroke-dasharray="0 52 0">
                <animate
                    id="appearence" 
                    attributeName="stroke-dashoffset" 
                    values="0;104;"
                    :dur="duration" 
                    repeatCount="indefinite"
                    keySplines=".25 .1 .25 1;"
                    calcMode="spline"
                    end="click"
                    fill="freeze"
                />
                <animate
                    attributeName="stroke-width"
                    values="0;2;0"
                    begin="appearence.begin"
                    end="appearence.end"
                    :dur="duration"
                    repeatCount="indefinite"
                    keySplines=".25 .1 .25 1;
                                .12 0 .39 0;"
                    calcMode="spline"
                />
            </path>
        </svg>
        <svg class="loader" viewBox="0 0 41 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.5 10L14.2155 4.41379C11.3837 1.89661 7.11631 1.89661 4.28448 4.41379V4.41379C0.939715 7.38692 0.939714 12.6131 4.28448 15.5862V15.5862C7.11631 18.1034 11.3837 18.1034 14.2155 15.5862L20.5 10ZM20.5 10L26.7845 15.5862C29.6163 18.1034 33.8837 18.1034 36.7155 15.5862V15.5862C40.0603 12.6131 40.0603 7.38692 36.7155 4.41379V4.41379C33.8837 1.89661 29.6163 1.89665 26.7844 4.41383C24.8419 6.14054 22.978 7.79737 20.5 10Z" stroke="black" stroke-width="2" stroke-dasharray="0 52 0">
                <animate
                    id="appearence" 
                    attributeName="stroke-dashoffset" 
                    values="0;104;"
                    :dur="duration" 
                    repeatCount="indefinite"
                    keySplines=".7 0 .84 0;"
                    calcMode="spline"
                    end="click"
                    fill="freeze"
                />
                <animate
                    attributeName="stroke-width"
                    values="0;2;0"
                    begin="appearence.begin"
                    end="appearence.end"
                    :dur="duration"
                    repeatCount="indefinite"
                    keySplines=".25 .1 .25 1;
                                .12 0 .39 0;"
                    calcMode="spline"
                />
            </path>
        </svg>
        <svg class="loader" viewBox="0 0 41 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.5 10L14.2155 4.41379C11.3837 1.89661 7.11631 1.89661 4.28448 4.41379V4.41379C0.939715 7.38692 0.939714 12.6131 4.28448 15.5862V15.5862C7.11631 18.1034 11.3837 18.1034 14.2155 15.5862L20.5 10ZM20.5 10L26.7845 15.5862C29.6163 18.1034 33.8837 18.1034 36.7155 15.5862V15.5862C40.0603 12.6131 40.0603 7.38692 36.7155 4.41379V4.41379C33.8837 1.89661 29.6163 1.89665 26.7844 4.41383C24.8419 6.14054 22.978 7.79737 20.5 10Z" stroke="black" stroke-width="2" stroke-dasharray="0 52 0">
                <animate
                    id="appearence" 
                    attributeName="stroke-dashoffset" 
                    values="0;104;"
                    :dur="duration" 
                    repeatCount="indefinite"
                    keySplines=".11 0 .5 0;"
                    calcMode="spline"
                    end="click"
                    fill="freeze"
                />
                <animate
                    attributeName="stroke-width"
                    values="0;2;0"
                    begin="appearence.begin"
                    end="appearence.end"
                    :dur="duration"
                    repeatCount="indefinite"
                    keySplines=".25 .1 .25 1;
                                .12 0 .39 0;"
                    calcMode="spline"
                />
            </path>
        </svg>
        <svg class="loader" viewBox="0 0 41 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.5 10L14.2155 4.41379C11.3837 1.89661 7.11631 1.89661 4.28448 4.41379V4.41379C0.939715 7.38692 0.939714 12.6131 4.28448 15.5862V15.5862C7.11631 18.1034 11.3837 18.1034 14.2155 15.5862L20.5 10ZM20.5 10L26.7845 15.5862C29.6163 18.1034 33.8837 18.1034 36.7155 15.5862V15.5862C40.0603 12.6131 40.0603 7.38692 36.7155 4.41379V4.41379C33.8837 1.89661 29.6163 1.89665 26.7844 4.41383C24.8419 6.14054 22.978 7.79737 20.5 10Z" stroke="black" stroke-width="2" stroke-dasharray="0 52 0">
                <animate
                    id="appearence" 
                    attributeName="stroke-dashoffset" 
                    values="0;104;"
                    :dur="duration" 
                    repeatCount="indefinite"
                    keySplines=".45 0 .55 0;"
                    calcMode="spline"
                    end="click"
                    fill="freeze"
                />
                <animate
                    attributeName="stroke-width"
                    values="0;2;0"
                    begin="appearence.begin"
                    end="appearence.end"
                    :dur="duration"
                    repeatCount="indefinite"
                    keySplines=".25 .1 .25 1;
                                .12 0 .39 0;"
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
    },
    data() {
        return {
            duration: 1
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

.loader {
    width: 100vw;
    height: 15vh;
    margin: auto;
}
</style>
