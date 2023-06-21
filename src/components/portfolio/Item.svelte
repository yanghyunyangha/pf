<script>
    import Text from "./Text.svelte";
    import Card from "./Card.svelte";
    export let items, idx, object, boxMouse, detailShow, w
</script>

<li 
    class="box"
    bind:this={items[idx]}
    on:mouseenter={ e => w > 1200? boxMouse(e, 'enter'): null }
    on:mouseleave={ e => w > 1200? boxMouse(e, 'leave'): null }
>
    <button type="button" on:click={detailShow(object)}>
        <Text { object } />
        <Card { object } />
    </button>
</li>