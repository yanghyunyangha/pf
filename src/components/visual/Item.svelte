<script>
    import Info from "./Info.svelte";
    import Img from "./Img.svelte";

    export let item, idx, w;
</script>

<div class="item item{idx+1}">
    <div class="bg"></div>
    <div class="content">
        <Info { item } { w } />
        <Img { item } { w } />
    </div>
</div>