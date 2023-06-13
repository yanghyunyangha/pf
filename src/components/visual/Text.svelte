<script>
    import enter from '@images/visual/enter.png';
    export let item, styles, w
</script>

<div class="{ styles.txt }">
    <div class="flex { styles.sitename }">
        <div class="txt-up title { styles.title }">
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
    {#if w <= 400}
    <a href="{ item.url }" class="{ styles.more_img }" target="_blank">
        <img src="{ enter }" alt="사이트 바로가기">
    </a>
    {/if}
</div>