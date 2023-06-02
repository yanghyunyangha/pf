<script>
    import Item from "./Item.svelte";
    export let styles, items
</script>

<ul class="list { styles.list }">
    { #each Array(10) as _, idx}
        <Item { styles } { items } { idx } />
    {/each }
</ul>