<script>
    export let item, w
</script>

<div class="img">
    {#if w > 800}
        <div class="pc"><img src="{item.pcImg}" alt="사이트 미리보기"></div>
        <div class="mobile"><img src="{item.moImg}" alt="사이트 미리보기"></div>
    {:else if w > 400}
        <div class="pc"><img src="{item.pcImg}" alt="사이트 미리보기"></div>
    {:else if w <= 400}
        <div class="mobile"><img src="{item.moImg}" alt="사이트 미리보기"></div>
    {/if}
</div>