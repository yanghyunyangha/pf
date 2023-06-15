<script>
    import src from '@images/common/arrow_r.png'
    export let object
</script>

<div class="card">
    <div>
        <p class="type bold">
            {#if object.type == 1} Website
            {:else if object.type == 2} Landing
            {:else} Script
            {/if}
        </p>
        <p class="light">{ object.name }</p>
    </div>
    <span class="icon">
        <img { src } alt="자세히 보기">
    </span>
</div>