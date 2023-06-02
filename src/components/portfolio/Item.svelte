<script>
    import Text from "./Text.svelte";
    import Card from "./Card.svelte";
    export let styles, items, idx, object, boxMouse
</script>

<li 
    class="box"
    data-sort="{ (idx % 3) + 1 }"
    bind:this={items[idx]}
    on:mouseenter={ e => boxMouse(e, 'enter') }
    on:mouseleave={ e => boxMouse(e, 'leave') }
>
    <button type="button">
        <Text { styles } { object } />
        <Card { styles } />
    </button>
</li>