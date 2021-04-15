import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('scroll', {
    inserted(el, binding) {
        let scroll = {
            current: 0,
            destination: 0,
            elastick: 0,
            step: binding.value.step ?? 20,
            max: 0,
            speed: binding.value.speed ?? 50
        };
        const progressFunction = binding.value.progressFunc ?? ((part) => 1 - Math.pow(1 - part, 2));
        const currentGetter = binding.value.getter ?? (() => {});
        const startEvent = binding.value.event ?? null;
        let distanceToScroll, partOfMax, scrollThisTic;       

        function animate() {
            distanceToScroll = scroll.destination  + scroll.elastick - scroll.current;
            if (distanceToScroll != 0) {
                partOfMax = distanceToScroll/scroll.max;
                scrollThisTic = progressFunction(partOfMax) * scroll.speed;
                scroll.current += (Math.abs(distanceToScroll) < 1) ? distanceToScroll : scrollThisTic;
            }

            if (scroll.elastick != 0) {
                if (scroll.current > scroll.destination && scroll.elastick > 0) {
                    scroll.elastick -= scroll.step;
                } else if (scroll.current < scroll.destination) {
                    scroll.elastick += scroll.step;
                }
            }

            el.style.transform = 'translateY(' + -scroll.current + 'px)';
            currentGetter(scroll);
            
            requestAnimationFrame(animate);
        }

        if (startEvent) {
            window.addEventListener(startEvent, () => {
                scroll.max = document.body.scrollHeight - document.documentElement.clientHeight;
                requestAnimationFrame(animate);
            });
        } else {    
            scroll.max = document.body.scrollHeight - document.documentElement.clientHeight;    
            requestAnimationFrame(animate);
        }

        document.body.addEventListener('wheel', (e) => {
            const step = Math.sign(e.deltaY) * scroll.step * 5;
            if (scroll.destination + step < 0) {
                scroll.destination = 0;
                scroll.elastick = step;
            } else if (scroll.destination + step > scroll.max) {
                scroll.destination = scroll.max;
                scroll.elastick = step;
            } else {                
                scroll.destination += step;
            }
        });
    }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
