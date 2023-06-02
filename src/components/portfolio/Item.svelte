<script>
    import Text from "./Text.svelte";
    import Card from "./Card.svelte";
    export let styles, items, idx
</script>

<li 
    class="box { styles.box }"
    bind:this={items[idx]}
>
    <button type="button">
        <Text { styles } />
        <Card { styles } />
    </button>
</li>