<script>
    import src from '@images/common/arrow_r.png'
    export let object
</script>

<div class="card">
    <div>
        <p class="type bold">{ object.type }</p>
        <p class="light cardname">{ object.name }</p>
    </div>
    <span class="icon">
        <img { src } alt="자세히 보기">
    </span>
</div>