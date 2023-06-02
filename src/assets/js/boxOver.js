import { gsap } from "gsap";

function boxOver(w, e, type){
    const step = Math.floor(w / 300),
                width = w / step,
                height = 300,
                target = e.target.querySelector('.card'),
                x = e.offsetX - width / 2,
                y = (e.offsetY - height / 2) * (width / height),
                d = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180 ) / 90 ) + 3 )  % 4;

    if(type == 'enter'){
        d == 0? gsap.fromTo(target, {x:0, y:'-100%'}, {y:0, x:0, duration:0.4}):
        d == 1? gsap.fromTo(target, {x:'100%', y:0}, {y:0, x:0, duration:0.4}):
        d == 2? gsap.fromTo(target, {x:0, y:'100%'}, {y:0, x:0, duration:0.4}):
        gsap.fromTo(target, {x:'-100%', y:0}, {y:0, x:0, duration:0.4});
    } else{
        d == 0? gsap.to(target, {y:'-100%', duration:0.4}): 
        d == 1? gsap.to(target, {x:'100%', duration:0.4}):
        d == 2? gsap.to(target, {y:'100%', duration:0.4}):
        gsap.to(target, {x:'-100%', duration:0.4})
    }
    
}

export { boxOver }