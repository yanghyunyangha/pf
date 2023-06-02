<script>
    import Text from "./Text.svelte";
    import Card from "./Card.svelte";
    export let styles, items, idx, object
</script>

<li 
    class="box"
    data-sort="{ (idx % 3) + 1 }"
    bind:this={items[idx]}
>
    <button type="button">
        <Text { styles } { object } />
        <Card { styles } />
    </button>
</li>