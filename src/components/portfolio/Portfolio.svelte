<script>
    import styles from "./style.module.css"
    import Top from "./Top.svelte";
    import List from "./List.svelte";

    export let classNames, items

    const cn = classNames.bind(styles);
</script>

<section class="{ styles.portfolio }">
    <div class="inner { styles.inner }">
        <Top { styles } { cn } />
    </div>
    <List { styles } { items } />
</section>