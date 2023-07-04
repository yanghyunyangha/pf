import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
    duration: 0.6
});
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add(time => {
    lenis.raf(time * 1000)
});
gsap.ticker.lagSmoothing(0);