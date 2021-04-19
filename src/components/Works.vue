<template>
    <div class="container">
        <div class="description">
            <div class="header">
                <span>Example</span>
                <br>
                <span>Work</span>
            </div>
            <div class="about">
                <div class="text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique odio velit ducimus saepe a! Maxime earum perferendis provident maiores, ullam nobis iure minus eveniet, aliquam laboriosam quaerat? Quam, dicta commodi!
                </div>
            </div>
        </div>
        <div class="pictures">
            <img src="../assets/work.jpg" alt="">
            <svg 
                class="back"
                viewBox="0 0 16 9" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient  id="Gradient1" spreadMethod="reflect" x1="0" y1="1" x2="1" y2="0">
                        <stop offset="0" stop-color="#F41D62"/>
                        <stop offset="0.6" stop-color="#383de1">
                            <animate
                                attributeName="offset"
                                values="0.6;1;0.6"
                                repeatCount="indefinite"
                                dur="2.5"
                                begin="0"
                                keySplines="0.65, 0, 0.35, 1;
                                            0.61, 1, 0.88, 1;"
                            />
                        </stop>
                    </linearGradient >
                </defs>

                <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient1)"/>           
            </svg>
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
    z-index: -9999;
}

.description {
    display: flex;
    flex-direction: column;
    margin-left: 5rem;
    width: 50vw;
    color: #e6e6e6;
}

.description .header {
    margin-bottom: 5rem;
}

.description .header span{    
    font-weight: bold;
    font-size: 5rem;
}

.description .about .text {
    color: #e6e6e6e7;
    font-size: 1.5rem;
    width: 75%;
}

.pictures {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50vw;
}

.pictures img {
    position: absolute;
    width: 42.5vw;
}

.pictures .back {    
    position: absolute;
    width: 45vw;
    z-index: -1;
}
</style>