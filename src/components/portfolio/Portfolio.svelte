<script>
    import '@scss/pf/style.scss'
    import List from './List.svelte'

    export let items, portList, boxMouse, detailShow, w

    const list = {
        items:items,
        portList: portList,
        boxMouse: boxMouse,
        detailShow: detailShow
    }

</script>

<section class="portfolio">
    <div class="inner">
        <List { ...list } { w } />
    </div>
</section>