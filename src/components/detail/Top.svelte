<script>
    import Info from './Info.svelte';
    import close from '@images/common/close.png';
    export let styles, detailItem, detailHide
</script>

<div class="flex-between { styles.top }">
    <Info { detailItem } { styles }  />
    <button type="button" class="{ styles.close }" on:click={detailHide}>
        <img src="{ close }" alt="닫기">
    </button>
</div>