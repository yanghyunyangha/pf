<script>
    import Item from "./Item.svelte";
    export let items, portList, boxMouse, detailShow, w
</script>

<div class="list">
    <div class="about item">
        <span class="circle"></span>
        <h2 class="title">Web Publisher</h2>
        <div class="caption">PC, Mobile, Reponsive Website</div>
    </div>
    { #each portList as object, idx}
        <Item { items } { object } { idx } { boxMouse } { detailShow } { w } />
    {/each }
</div>