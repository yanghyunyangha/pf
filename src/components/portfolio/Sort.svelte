<script>

    export let styles, sortList, cn, sort, sortClick

</script>

<div class="flex caption { styles.btns }">
    { #each sortList as sorts, idx}
        <button 
            type="button"
            class="{cn( { active: sort == idx } )}"
            on:click={sortClick(idx)}
        >
            {sorts}
        </button> 
    {/each }
</div>