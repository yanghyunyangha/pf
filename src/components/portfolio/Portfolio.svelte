<script>
    import styles from "./style.module.css"
    import Top from "./Top.svelte";
    import List from "./List.svelte";
    import Bg from "../about/Bg.svelte";

    export let classNames, items, portList, sort, sortClick, boxMouse, detailShow

    const cn = classNames.bind(styles);
</script>

<section class="{ styles.portfolio }">
    <div class="inner { styles.inner }">
        <Top { styles } { cn } { sort } { sortClick } />
    </div>
    <List { styles } { items } { portList } { boxMouse } { detailShow } />
    <Bg />
</section>