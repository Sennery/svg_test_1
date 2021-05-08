<template>
    <div class="container wrapped">
        <div class="photo">

        </div>
        <div class="info">
            <span>Hi, whoever you are!</span>
            <span>I'm a Web developer based in Russia,</span>
            <span>
                <p>my name is</p>
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
            <a 
                class="contact"
                v-for="it in contacts"
                :key="it.color"
                :href="it.link"
            >
                <p>{{ it.name }}</p>
                <div 
                    class="rect"
                    :style="{ 'background-color': it.color }"
                ></div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            contacts: [
                {
                    name: 'GitHub',
                    color: '#bb268a',
                    link: ''
                },
                {
                    name: 'LinkedIn',
                    color: '#9b2a9f',
                    link: ''
                },
                {
                    name: 'Telegram',
                    color: '#7132bb',
                    link: ''
                },
                {
                    name: 'Email',
                    color: '#5a38cb',
                    link: ''
                }
            ]
        }
    }
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
    padding: 5vh 5vw;
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
}

.info > span:nth-child(2) {
    font-size: 4rem;
    color: #e6e6e6ee;
}

.info > span:nth-child(3) {
    font-size: 3rem;
    color: #e6e6e6e3;
}

.info > span:nth-child(4) {
    font-size: 2rem;
    color: #e6e6e6d5;
    text-align: end;
}

.info span {
    font-weight: bold;
    margin-bottom: 3vh;
    transition: transform 0.5s cubic-bezier(0.45, 0, 0.55, 1),
                opacity 0.5s cubic-bezier(0.45, 0, 0.55, 1);
}

.info p {
    font-weight: bold;
}

.info .name {
    height: auto;
}

.info .name text {
    font-size: 10px;
}

.contacts {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    font-size: 3rem;
}

.contacts .contact {
    position: relative;
    height: 3vw;
    width: 15vw;
    overflow: hidden;    
    color: #e6e6e6;
}

.contacts .contact:nth-child(1) {
    transition: transform 0.5s cubic-bezier(0.45, 0, 0.55, 1) 0.5s,
                opacity 0.5s cubic-bezier(0.45, 0, 0.55, 1) 0.5s;
}

.contacts .contact:nth-child(2) {
    transition: transform 0.6s cubic-bezier(0.45, 0, 0.55, 1) 0.5s,
                opacity 0.6s cubic-bezier(0.45, 0, 0.55, 1) 0.5s;
}

.contacts .contact:nth-child(3) {
    transition: transform 0.7s cubic-bezier(0.45, 0, 0.55, 1) 0.5s,
                opacity 0.7s cubic-bezier(0.45, 0, 0.55, 1) 0.5s;
}

.contacts .contact:nth-child(4) {
    transition: transform 0.8s cubic-bezier(0.45, 0, 0.55, 1) 0.5s,
                opacity 0.8s cubic-bezier(0.45, 0, 0.55, 1) 0.5s;
}

.contact .rect , .contact p {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: transform 0.25s cubic-bezier(0.45, 0, 0.55, 1);
}

.contact p {
    margin-left: 5%;
    z-index: 1;
}

.contact .rect {
    top: 100%;
}

.contact:hover p{
    transform: translateX(5%);
}

.contact:hover .rect {
    transform: translateY(-55%);
}

.info > span:nth-child(1) {
    transition: transform 0.5s cubic-bezier(0.45, 0, 0.55, 1),
                opacity 0.5s cubic-bezier(0.45, 0, 0.55, 1);
}

.info > span:nth-child(2) {
    transition: transform 0.6s cubic-bezier(0.45, 0, 0.55, 1),
                opacity 0.6s cubic-bezier(0.45, 0, 0.55, 1);
}

.info > span:nth-child(3) {
    transition: transform 0.7s cubic-bezier(0.45, 0, 0.55, 1),
                opacity 0.7s cubic-bezier(0.45, 0, 0.55, 1);
}

.info > span:nth-child(4) {
    transition: transform 0.8s cubic-bezier(0.45, 0, 0.55, 1),
                opacity 0.8s cubic-bezier(0.45, 0, 0.55, 1);
}

.wrapped .info > span {
    transition: transform 0.5s cubic-bezier(0.45, 0, 0.55, 1),
                opacity 0.5s cubic-bezier(0.45, 0, 0.55, 1) !important;
    transform: translateY(20vh);
    opacity: 0;
}

.wrapped .contact {
    transition: transform 0.5s cubic-bezier(0.45, 0, 0.55, 1),
                opacity 0.5s cubic-bezier(0.45, 0, 0.55, 1) !important;
    transform: translateX(10vw);
    opacity: 0;
}
</style>