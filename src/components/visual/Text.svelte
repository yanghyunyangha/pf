<script>
    export let item
</script>

<div class="siteinfo">
    <div class="txt-up title">
        <p class="name">{ item.name }</p>
    </div>
    <div class="txt-up type">
        <p>
            {#if item.type == 1} Website
            {:else if item.type == 2} Landing
            {:else} Script
            {/if}
        </p>
    </div>
</div>