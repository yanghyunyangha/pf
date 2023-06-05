<script>
    import styles from './style.module.css';
    import Info from './Info.svelte';
    import { fly } from 'svelte/transition';

    export let classNames, detailItem
</script>

<div class="{ styles.detail }">
    <div class="inner { styles.inner }">
        <Info { styles } { detailItem } />
    </div>
</div>