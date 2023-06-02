<script>
    import classNames from 'classnames/bind'
    import Header from "./components/header/Header.svelte";
    import Visual from './components/visual/Visual.svelte';
    import Portfolio from './components/portfolio/Portfolio.svelte';
    import { setLayout } from './assets/js/setLayout';

    let w,
        items = [];

    function setBoxLayout(duration){
        const step = Math.floor(w / 300);
        items.forEach((x, idx) => {
            let width = w /  step;
            let row = Math.floor(idx / step);
            let column = idx % step;
            x.style.width = `${width}px`;
            x.style.transform = `translate(${column*width}px, ${row*300}px)`
        })
    }

</script>

<svelte:window
    bind:innerWidth={w}
    on:load={ () => {
        setLayout(w)
        setBoxLayout(0);
    } }
/>

<Header { classNames } />
<Visual { classNames } />
<main>
    <Portfolio { classNames } { items } />
</main>
