<script>
    import '@scss/pf/style.scss';
    import Top from './Top.svelte'
    import List from './List.svelte'
    import Bg from '../about/Bg.svelte'

    export let items, portList, boxMouse, detailShow

    const list = {
        items:items,
        portList: portList,
        boxMouse: boxMouse,
        detailShow: detailShow
    }

</script>

<section class="portfolio">
    <div class="inner">
        <Top />
        <List { ...list } />
    </div>
    <Bg />
</section>