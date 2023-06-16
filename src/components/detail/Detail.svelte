<script>
    import '@scss/detail/style.scss'
    import Top from './Top.svelte';
    import { fly } from 'svelte/transition';

    export let detailItem, detailHide
</script>

<div 
    class="detail"
    in:fly={ { y: window.innerHeight, opacity: 1, duration: 700 } }
    out:fly={ { y: window.innerHeight, opacity:1, duration: 700 } }
>
    <div class="inner">
        <Top { detailItem } { detailHide } />
    </div>
</div>