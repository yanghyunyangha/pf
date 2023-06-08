<script>
    export let item, styles, w;
</script>

<div class="{ styles.img }">
    <div class="{ styles.pc }"><img src="{item.pcImg}" alt=""></div>
    {#if w > 800}
    <div class="{ styles.mobile }"><img src="item.moImg" alt=""></div>
    {/if}
</div>