<script>
    import Sort from "./Sort.svelte";
    export let styles, cn

    const sortList = ['All', 'Type', 'Value', 'Etc']

</script>

<div class="flex-between { styles.top }">
    <h2 class="{ styles.title }">Title</h2>
    <Sort { styles } { sortList } { cn } />
</div>