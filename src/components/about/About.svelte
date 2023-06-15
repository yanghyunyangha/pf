<script>
    import "@scss/about/style.scss";
    import Top from "./Top.svelte";
    import List from "./List.svelte";
    import Bg from "./Bg.svelte";
</script>

<section class="about">
    <div class="inner flex-between">
        <Top />
        <List />
    </div>
    <Bg />
</section>