<script>
    export let item, styles
</script>

<div class="{ styles.txt }">
    <div class="flex { styles.title }">
        <div class="txt-up { styles.name }">
            <p class="name">{ item.name }</p>
        </div>
        <div class="txt-up { styles.type }">
            <p class="type">
                {#if item.type == 1} Website
                {:else if item.type == 2} Landing
                {:else} Script
                {/if}
            </p>
        </div>
    </div>
    <a href="{ item.url }" class="more { styles.more }" target="_blank">
        View Site
        <span class="clip { styles.clip }">View Site</span>
        <span class="circle { styles.circle }"></span>
    </a>
</div>