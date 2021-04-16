import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('scroll', {
    inserted(el, binding) {
        let scroll = {
            current: 0,
            destination: 0,
            elastick: 0,
            step: binding.value.step ?? 100,
            max: 0,
            speed: binding.value.speed ?? 80,
            distanceToScroll: 0,
            partOfMax: 0,
            scrollThisTic: 0
        };
        const progressFunction = binding.value.progressFunc ?? ((part) => 1 - Math.pow(1 - part, 2));
        const currentGetter = binding.value.getter ?? (() => {});
        const startEvent = binding.value.event ?? null;      

        function animate() {
            scroll.distanceToScroll = scroll.destination  + scroll.elastick - scroll.current;
            if (scroll.distanceToScroll != 0) {
                scroll.partOfMax = scroll.distanceToScroll/scroll.max;
                scroll.scrollThisTic = progressFunction(scroll.partOfMax) * scroll.speed;
                scroll.current += (Math.abs(scroll.distanceToScroll) < 1) ? scroll.distanceToScroll : scroll.scrollThisTic;
            }

            if (scroll.elastick != 0) {
                if (scroll.current > scroll.destination && scroll.elastick > 0) {
                    scroll.elastick -= scroll.step;
                } else if (scroll.current < scroll.destination && scroll.elastick < 0) {
                    scroll.elastick += scroll.step;
                }
            }

            el.style.transform = 'translateY(' + -scroll.current + 'px)';
            currentGetter(scroll);
            
            requestAnimationFrame(animate);
        }

        if (startEvent) {
            window.addEventListener(startEvent, () => {
                scroll.max = el.scrollHeight - document.documentElement.clientHeight;
                requestAnimationFrame(animate);
            });
        } else {    
            scroll.max = el.scrollHeight - document.documentElement.clientHeight;    
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
