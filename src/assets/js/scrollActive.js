function scrollActive(targets){
    targets.forEach(x => {
        if(window.scrollY + window.innerHeight / 1.2 > x.getBoundingClientRect().y){
            x.classList.add('active')
        }
    });
}

export { scrollActive }