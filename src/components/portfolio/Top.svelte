<script>
    import Sort from "./Sort.svelte";
    export let styles, cn, sort, sortClick

    const sortList = ['All', 'Type', 'Value', 'Etc']

</script>

<div class="flex-between { styles.top }">
    <h2 class="title { styles.title }">Title</h2>
    <Sort { styles } { sortList } { cn } { sort } { sortClick } />
</div>