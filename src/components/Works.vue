<template>
    <div class="container wrapped">
        <div class="description">
            <div class="header">
                <span>Example</span>
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
                    </linearGradient>
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
    padding: 0 5vw;
    transition: transform 0.5s cubic-bezier(0.45, 0, 0.55, 1),
                opacity 0.5s cubic-bezier(0.45, 0, 0.55, 1);
}

.description {
    display: flex;
    flex-direction: column;
    width: 45vw;
    color: #e6e6e6;
    z-index: 1;
    transition: inherit;
}

.description .header {
    display: flex;
    flex-direction: column;
    margin-bottom: 5vh;
}

.description .header span{    
    font-weight: bold;
    font-size: 5rem;
}

.description .about .text {
    color: #e6e6e6e7;
    font-size: 1.5rem;
    width: 75%;
    transition: transform 0.5s cubic-bezier(0.45, 0, 0.55, 1) 0.5s,
                opacity 0.5s cubic-bezier(0.45, 0, 0.55, 1) 0.5s;
}

.pictures {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45vw;
    transition: inherit;
}

.pictures img {
    position: absolute;
    width: 42.5vw;
    transition: transform 0.5s cubic-bezier(0.45, 0, 0.55, 1) 0.5s;
}

.pictures .back {    
    position: absolute;
    width: 45vw;
    z-index: -1;
}

.wrapped .pictures {
    transform: translateX(-22.5vw);
}

.wrapped .pictures img {
    transform: scale(1.15);
    transition: transform 0.5s cubic-bezier(0.45, 0, 0.55, 1);
}

.container:not(.wrapped) .pictures img:hover {
    transform: scale(1.1) translate(-2vw,-2vw);
    transition: transform 0.5s cubic-bezier(0.45, 0, 0.55, 1);
}

.wrapped .description {
    transform: translateX(22.5vw);
    opacity: 0;
}

.wrapped .description .text {
    transform: translateY(2.5vh);
    opacity: 0;
    transition: transform 0.5s cubic-bezier(0.45, 0, 0.55, 1),
                opacity 0.5s cubic-bezier(0.45, 0, 0.55, 1);
}
</style>