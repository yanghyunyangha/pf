<script>
    import styles from './style.module.css';
    import Top from './Top.svelte';
    import List from './List.svelte';
    import Bgline from './Bgline.svelte';
</script>

<section class="{ styles.about }">
    <div class="inner flex-between">
        <Top { styles } />
        <List { styles} />
    </div>
    <Bgline />
</section>