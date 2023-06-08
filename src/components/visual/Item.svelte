<script>
    import Text from "./Text.svelte";
    import Img from "./Img.svelte";

    export let item, idx, styles, cn, w;

    const list = {
        item: item,
        styles: styles
    }
</script>

<div class="{ cn(styles.item, `item0${idx+1}`) }">
    <div class="{ styles.bg }"></div>
    <div class="flex-between { styles.content }">
        <Text { ...list } />
        <Img { ...list } { w } />
    </div>
</div>