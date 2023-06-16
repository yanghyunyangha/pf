<script>
    import Text from "./Text.svelte";
    import Card from "./Card.svelte";
    export let items, idx, object, boxMouse, detailShow
</script>

<li 
    class="box"
    bind:this={items[idx]}
    on:mouseenter={ e => boxMouse(400, 346, e, 'enter') }
    on:mouseleave={ e => boxMouse(400, 346, e, 'leave') }
>
    <button type="button" on:click={detailShow(object)}>
        <Text { object } />
        <Card { object } />
    </button>
</li>