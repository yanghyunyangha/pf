<script>
    export let item, styles;
</script>

<div class="{ styles.img }">
    <div class="{ styles.pc }"><img src="{item.pcImg}" alt="pc 미리보기"></div>
    <div class="{ styles.mobile }"><img src="{item.moImg}" alt="모바일 미리보기"></div>
</div>