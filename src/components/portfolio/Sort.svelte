<script>
    export let styles, sortList, cn

    let current = 0;
</script>

<div class="flex sort_btns { styles.btns }">
    { #each sortList as sort, idx}
        <button 
            type="button"
            class="{cn( { active: current == idx } )}"
            on:click={ () => current = idx }
        >
            {sort}
        </button> 
    {/each }
</div>