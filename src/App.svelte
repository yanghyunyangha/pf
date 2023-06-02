<script>
    import classNames from 'classnames/bind'
    import Header from "./components/header/Header.svelte";
    import Visual from './components/visual/Visual.svelte';
    import Portfolio from './components/portfolio/Portfolio.svelte';
    import { setLayout } from './assets/js/setLayout';
    import { setBoxLayout } from './assets/js/setBoxLayout';
    import { ports } from './components/portfolio/portfolio';

    let w,
        items = [],
        beforeItems = [],
        afterItems = [],
        newItems = [],
        portList = ports;
    $: sort = 0;

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

</script>

<svelte:window
    on:resize={ () => {
        w = document.documentElement.clientWidth;
        setLayout(w);
        setBoxLayout(newItems, w, 0);
    } }
    on:load={ () => {
        w = document.documentElement.clientWidth;
        setLayout(w)
        setBoxLayout(items, w, 0);
    } }
/>

<Header { classNames } />
<Visual { classNames } />
<main>
    <Portfolio { classNames } { items } { portList } { sort } { sortClick } />
</main>
