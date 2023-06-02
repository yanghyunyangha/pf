<script>
    import Item from "./Item.svelte";
    export let styles, items, portList
</script>

<ul class="list { styles.list }">
    { #each portList as object, idx}
        <Item { styles } { items } { object } { idx } />
    {/each }
</ul>