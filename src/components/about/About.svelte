<script>
    import styles from './style.module.css';
    import Top from './Top.svelte';
    import List from './List.svelte';
</script>

<div class="{ styles.about }">
    <div class="inner { styles.inner }">
        <Top { styles } />
        <List { styles} />
    </div>
</div>