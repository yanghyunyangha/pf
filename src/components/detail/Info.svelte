<script>
    export let detailItem
</script>

<div class="info">
    <dl>
        <dt class="medium">NAME:</dt>
        <dd class="light">{ detailItem.name }</dd>
    </dl>
    <dl>
        <dt class="medium">CATEGORY:</dt>
        <dd class="light">{ detailItem.type }</dd>
    </dl>
    <dl>
        <dt class="medium">URL:</dt>
        <dd class="light"><a href="{ detailItem.url }" target="_blank">{ detailItem.url }</a></dd>
    </dl>
</div>