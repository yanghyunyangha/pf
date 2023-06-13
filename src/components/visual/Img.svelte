<script>
    export let item, styles, w;
</script>

<div class="{ styles.img }">
    {#if w > 400}
    <div class="{ styles.pc }"><img src="{item.pcImg}" alt=""></div>
    {/if}
    {#if w > 800 || w <= 400}
    <div class="{ styles.mobile }"><img src="{item.moImg}" alt=""></div>
    {/if}
</div>