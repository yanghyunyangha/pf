<script>
    export let detailItem, styles
</script>

<div class="flex { styles.info }">
    <dl class="flex">
        <dt class="medium">NAME:</dt>
        <dd class="light">{ detailItem.name }</dd>
    </dl>
    <dl class="flex">
        <dt class="medium">TYPE:</dt>
        <dd class="light">
            {#if detailItem.type == 1} Website
            {:else if detailItem.type == 2} Landing
            {:else} Script
            {/if}
        </dd>
    </dl>
    <dl class="flex">
        <dt class="medium">URL:</dt>
        <dd class="light"><a href="{ detailItem.url }" target="_blank">{ detailItem.url }</a></dd>
    </dl>
</div>