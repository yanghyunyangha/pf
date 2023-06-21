<script>
    import Text from "./Text.svelte";
    import Card from "./Card.svelte";
    export let items, idx, object, boxMouse, detailShow
</script>

<li 
    class="box"
    bind:this={items[idx]}
    on:mouseenter={ e => boxMouse(e, 'enter') }
    on:mouseleave={ e => boxMouse(e, 'leave') }
>
    <button type="button" on:click={detailShow(object)}>
        <Text { object } />
        <Card { object } />
    </button>
</li>