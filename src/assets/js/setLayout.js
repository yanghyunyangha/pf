function setLayout(w){
    const list = document.querySelector('.list'),
                leng = list.childElementCount,
                step = Math.floor(w / 300);
    list.style.height = `${Math.ceil(leng / step) * 300}px`;
}

export { setLayout }