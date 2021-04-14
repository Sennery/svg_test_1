<template>
    <div id="app" @mousemove="mouseMove" @wheel="movePage">
        <!-- <Loader/> -->
        <Lines 
            :style="{ transform: 'translateY(' + -scroll.current + 'px)'}"
            :mouse="mouse"
        />
        <Works
            :style="{ transform: 'translateY(' + -scroll.current + 'px)'}"
        />
        <!-- <Transition/> -->
    </div>
</template>

<script>
//import Loader from './components/Loader.vue'
import Lines from './components/Lines.vue'
import Works from './components/Works.vue'
//import Transition from './components/Transition.vue'

export default {
    name: 'App',
    components: {
        // Loader,
        Lines,
        Works,
        // Transition
    },
    data() {
        return {
            mouse: {
                x: 0,
                y: 0
            },

            scroll: {
                current: 0,
                destination: 0,
                elastick: 0,
                step: 20,
                max: 0,
                speed: 40
            }
        }
    },
    methods: {
        mouseMove(e) {
            this.mouse.x = e.pageX;
            this.mouse.y = e.pageY;
        },
        movePage(e) {
            if (this.scroll.destination + e.deltaY < 0) {
                this.scroll.destination = 0;
                this.scroll.elastick = e.deltaY * 2;
            } else if (this.scroll.destination + e.deltaY > this.scroll.max) {
                this.scroll.destination = this.scroll.max;
                this.scroll.elastick = e.deltaY * 2;
            } else {                
                this.scroll.destination += e.deltaY;
            }
        },
        animateScroll() {
            const scroll = this.scroll;
            const progressFunction = this.progressFunction;
            let distanceToScroll, partOfMax, scrollThisTic;                      
            
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
                
                requestAnimationFrame(animate);
            });
        },
        progressFunction(part) {
            return 1 - Math.pow(1 - part, 2);
        }
    },
    mounted() {
        this.scroll.max = document.body.scrollHeight - document.documentElement.clientHeight;
        this.animateScroll();
    }
}
</script>

<style>
html {
    font-family: "Anodina", sans-serif;
    font-size: 1vw;
    background-color: #17181c !important;
    background-image: url('./assets/123.jpg');
    overflow: hidden;    
}

#app {    
    filter: url(#transitionFilter);
}
@font-face {
    font-family: "Anodina";
    src: url("assets/fonts/Anodina-Light.otf");
    font-weight: normal;
}
@font-face {
    font-family: "Anodina";
    src: url("assets/fonts/Anodina-ExtraBold.otf");
    font-weight: bold;
}
html, body, body div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, abbr, address, cite, code, del, dfn, em, img, ins, kbd, q, samp, small, strong, sub, sup, var, b, i, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, figure, footer, header, menu, nav, section, time, mark, audio, video, details, summary {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font-weight: normal;
	vertical-align: baseline;
	background: transparent;
}

article, aside, figure, footer, header, nav, section, details, summary {display: block;}

html {
	box-sizing: border-box;
}

*,
*:before,
*:after {
	box-sizing: inherit;
}
*/
img,
object,
embed {max-width: 100%;}

ul {list-style: none;}

blockquote, q {quotes: none;}

blockquote:before,
blockquote:after,
q:before,
q:after {content: ''; content: none;}

a {margin: 0; padding: 0; font-size: 100%; vertical-align: baseline; background: transparent;}

del {text-decoration: line-through;}

abbr[title], dfn[title] {border-bottom: 1px dotted #000; cursor: help;}

table {border-collapse: collapse; border-spacing: 0;}
th {font-weight: bold; vertical-align: bottom;}
td {font-weight: normal; vertical-align: top;}

hr {display: block; height: 1px; border: 0; border-top: 1px solid #ccc; margin: 1em 0; padding: 0;}

input, select {vertical-align: middle;}

pre {
    white-space: pre; 
    white-space: pre-wrap; 
    white-space: pre-line; 
    word-wrap: break-word; 
}

input[type="radio"] {vertical-align: text-bottom;}
input[type="checkbox"] {vertical-align: bottom;}
.ie7 input[type="checkbox"] {vertical-align: baseline;}
.ie6 input {vertical-align: text-bottom;}

select, input, textarea {font: 99% sans-serif;}

table {font-size: inherit; font: 100%;}

small {font-size: 85%;}

strong {font-weight: bold;}

td, td img {vertical-align: top;}

sub, sup {font-size: 75%; line-height: 0; position: relative;}
sup {top: -0.5em;}
sub {bottom: -0.25em;}

pre, code, kbd, samp {font-family: monospace, sans-serif;}
.clickable,
label,
input[type=button],
input[type=submit],
input[type=file],
button {cursor: pointer;}

button, input, select, textarea {margin: 0;}
button,
input[type=button] {width: auto; overflow: visible;}
.ie7 img {-ms-interpolation-mode: bicubic;}
.clearfix:before, .clearfix:after { content: "\0020"; display: block; height: 0; overflow: hidden; }
.clearfix:after { clear: both; }
.clearfix { zoom: 1; }
</style>
