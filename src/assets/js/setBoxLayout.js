import { gsap } from "gsap";

function setBoxLayout(items, w, duration){
    const step = Math.floor(w / 300);
    items.forEach((x, idx) => {
        let width = w /  step;
        let row = Math.floor(idx / step);
        let column = idx % step;
        x.style.width = `${width}px`;
        gsap.fromTo(x, {opacity:0.5}, {x:column*width, y:row*300, opacity:1, duration});
        //x.style.transform = `translate(${column*width}px, ${row*300}px)`
    })
}

export { setBoxLayout }