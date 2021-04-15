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
            max: document.body.scrollHeight - document.documentElement.clientHeight,
            speed: binding.value.speed ?? 30
        };
        const progressFunction = binding.value.progressFunc ?? ((part) => 1 - Math.pow(1 - part, 2));
        const currentGetter = binding.value.getter ?? (() => {});
        let distanceToScroll, partOfMax, scrollThisTic;
        
        document.body.addEventListener('wheel', (e) => {
            if (scroll.destination + e.deltaY < 0) {
                scroll.destination = 0;
                scroll.elastick = e.deltaY * 2;
            } else if (scroll.destination + e.deltaY > scroll.max) {
                scroll.destination = scroll.max;
                scroll.elastick = e.deltaY * 2;
            } else {                
                scroll.destination += e.deltaY;
            }
        });
        
        requestAnimationFrame(function animate() {
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
        });
    }
  })

new Vue({
  render: h => h(App),
}).$mount('#app')
