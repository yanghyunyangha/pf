<script>
    import Text from "./Text.svelte";
    import Link from "./Link.svelte";

    export let item, w
</script>

<div class="info">
    <Text { item } />
    <Link { item } { w } />
</div>