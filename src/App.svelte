<script>
    import Header from "./components/header/Header.svelte";
    import Visual from './components/visual/Visual.svelte';
    import About from './components/about/About.svelte';
    import Portfolio from './components/portfolio/Portfolio.svelte';
    import Detail from './components/detail/Detail.svelte';
    import Lenis from "@studio-freight/lenis";
    import { setLayout } from './assets/js/setLayout';
    import { setBoxLayout } from './assets/js/setBoxLayout';
    import { boxOver } from './assets/js/boxOver';
    import { ports } from './assets/js/portfolio';
    import { scrollActive } from "./assets/js/scrollActive";

    let w,
        items = [],
        beforeItems = [],
        afterItems = [],
        newItems = [],
        portList = ports,
        detailItem = portList[0],
        visible = false;
    $: sort = 0;

    const lenis = new Lenis({
        duration: 0.6
    });
    function raf(time){
		lenis.raf(time);
		requestAnimationFrame(raf)
	}
	requestAnimationFrame(raf);

    function sortClick(i){
        if(sort != i){
            sort = i;
            newItems = items;
            beforeItems = items.filter(ele => ele.dataset.sort == sort);
            afterItems = items.filter(ele => ele.dataset.sort != sort);
            newItems = beforeItems.concat(afterItems);
            setBoxLayout(newItems, w, 0.4);
        }
    }

    function boxMouse(w, h, e, type){
        boxOver(w, h, e, type);
    }

    function detailShow(item){
        detailItem = item;
        visible = true;
        document.documentElement.classList.add('forbid_scroll');
        console.log('a')
    }

    function detailHide(){
        visible = false;
        document.documentElement.classList.remove('forbid_scroll');
    }

</script>

<svelte:window
    on:resize={ () => {
        w = document.documentElement.clientWidth;
        if(w <= 1200){
            lenis.destroy()
        }
        // setLayout(w);
        // sort == 0? setBoxLayout(items, w, 0): setBoxLayout(newItems, w, 0);
    } }
    on:load={ () => {
        w = document.documentElement.clientWidth;
        if(w <= 1200){
            lenis.destroy()
        }
        // setLayout(w)
        // setBoxLayout(items, w, 0);
    } }
    on:scroll={ () => {
        const scts = document.querySelectorAll('.main section');
        scrollActive(scts);
    } }
/>

<Visual { w } />
<main class="main">
    <About />
    <Portfolio { items } { portList } { boxMouse } { detailShow } />
</main>
{#if visible}
<Detail { detailItem } { detailHide } />
{/if}