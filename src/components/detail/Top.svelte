<script>
    import Info from './Info.svelte';
    import close from '@images/common/close.png';
    export let detailItem, detailHide
</script>

<div class="top">
    <Info { detailItem }  />
    <button type="button" class="close" on:click={detailHide}>
        <img src="{ close }" alt="닫기">
    </button>
</div>