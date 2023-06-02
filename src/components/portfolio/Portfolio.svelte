<script>
    import styles from "./style.module.css"
    import Top from "./Top.svelte";

    export let classNames

    const cn = classNames.bind(styles);
</script>

<section class="{ styles.portfolio }">
    <div class="inner { styles.inner }">
        <Top { styles } { cn } />
        Hello
    </div>
</section>