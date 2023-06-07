<script>
    import styles from './style.module.css';
    import Top from './Top.svelte';
    import { fly } from 'svelte/transition';

    export let detailItem, detailHide
</script>

<div 
    class="{ styles.detail }"
    in:fly={ { y: window.innerHeight, opacity: 1, duration: 700 } }
    out:fly={ { y: window.innerHeight, opacity:1, duration: 700 } }
>
    <div class="inner { styles.inner }">
        <Top { styles } { detailItem } { detailHide } />
    </div>
</div>