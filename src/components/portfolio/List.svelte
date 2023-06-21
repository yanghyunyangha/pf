<script>
    import Item from "./Item.svelte";
    export let items, portList, boxMouse, detailShow, w
</script>

<ul class="list">
    { #each portList as object, idx}
        <Item { items } { object } { idx } { boxMouse } { detailShow } { w } />
    {/each }
</ul>