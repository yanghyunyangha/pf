<script>
    import Header from './components/header/Header.svelte';
    import Portfolio from './components/portfolio/Portfolio.svelte';
    import Detail from './components/detail/Detail.svelte';
    import Lenis from "@studio-freight/lenis";
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
        lenis.stop();
    }

    function detailHide(){
        visible = false;
        document.documentElement.classList.remove('forbid_scroll');
        lenis.start();
    }

</script>

<svelte:window
    on:resize={ () => {
        w = window.innerWidth;
        if(w <= 1200){
            lenis.destroy()
        }
    } }
    on:load={ () => {
        w = window.innerWidth;
        if(w <= 1200){
            lenis.destroy()
        }
        
        const scts = document.querySelectorAll('.main section');
        scrollActive(scts);
    } }
    on:scroll={ () => {
        const scts = document.querySelectorAll('.main section'),
            header = document.querySelector('.header');
        scrollActive(scts);
        window.scrollY > 0? header.classList.add('scrolled'): header.classList.remove('scrolled');
    } }
/>

<main class="main">
    <Header />
    <Portfolio { items } { portList } { w } { boxMouse } { detailShow } />
</main>
{#if visible}
<Detail { detailItem } { detailHide } />
{/if}