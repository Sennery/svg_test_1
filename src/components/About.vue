<template>
    <div class="container">
        <div class="photo">

        </div>
        <div class="info">
            <span>Hi, whoever you are!</span>
            <span>I'm a Web developer based in Russia,</span>
            <span>
                <span>my name is</span>
                <svg 
                    viewBox="0 0 100 10" 
                    xmlns="http://www.w3.org/2000/svg"
                    class="name"
                >
                    <text 
                        x="50%" y="50%" 
                        dominant-baseline="central" 
                        class="text" 
                        text-anchor="middle"
                        fill="url(#Gradient1)"                  
                    >
                        Arsenii Likhachev
                    </text>
                </svg>
            </span>            
            <span>Say hello :)</span>
        </div>
        <div class="contacts">

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    padding: 0 5vw;
    color: #e6e6e6;
}

.info {
    display: flex;
    flex-direction: column;
    width: 60vw;    
}

.info > span:nth-child(1) {
    font-size: 5rem;
    color: #e6e6e6;
    margin-bottom: 5vh;
}

.info > span:nth-child(2) {
    font-size: 4rem;
    color: #e6e6e6ee;
    margin-bottom: 4vh;
}

.info > span:nth-child(3) {
    font-size: 3rem;
    color: #e6e6e6e3;
    margin-bottom: 3vh;
}

.info > span:nth-child(4) {
    font-size: 2rem;
    color: #e6e6e6d5;
    text-align: end;
}

.info span {
    font-weight: bold;
}

.info .name {
    height: auto;
}

.info .name text {
    font-size: 10px;
}
</style>