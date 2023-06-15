<script>
    import enter from '@images/common/enter.png';
    export let item, w
</script>

{#if w > 400}
<a href="{ item.url }" class="medium more" target="_blank">
    View Site
    <span class="clip">View Site</span>
    <span class="circle"></span>
</a>
{:else if w <= 400}
<a href="{ item.url }" class="more_img" target="_blank">
    <img src="{ enter }" alt="사이트 바로가기">
</a>
{/if}