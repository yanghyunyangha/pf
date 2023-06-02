<script>
    export let item, styles
</script>

<div class="{ styles.txt }">
    <div class="flex { styles.title }">
        <p class="{ styles.name }">{ item.name }</p>
        <p class="{ styles.type }">{ item.type }</p>
    </div>
    <button type="button" class="{ styles.more }">
        View More
        <span>View More</span>
    </button>
</div>