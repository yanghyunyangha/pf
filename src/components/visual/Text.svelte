<script>
    export let item, styles
</script>

<div class="{ styles.txt }">
    <div class="flex { styles.title }">
        <p class="{ styles.name }">{ item.name }</p>
        <p class="{ styles.type }">
            {#if item.type == 1} Website
            {:else if item.type == 2} Landing
            {:else} Script
            {/if}
        </p>
    </div>
    <a href="{ item.url }" class="{ styles.more }" target="_blank">
        View Site
        <span>View Site</span>
    </a>
</div>