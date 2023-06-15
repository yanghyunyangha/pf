<script>
    import Item from "./Item.svelte";
    import Pager from "./Pager.svelte";
    export let items, w;
</script>

<swiper-container
    effect='fade'
    space-between={1}
    speed={800}
    loop={true}
    autoplay={{
        delay:3000,
        disableOnInteraction:false
    }}
    pagination={{
        el: '.swiper-pagination',
        bulletElement: 'button',
        clickable: true,
        bulletActiveClass: 'active'
    }}
>
    { #each items as item, idx}
        <swiper-slide>
            <Item { item } { idx } { w } />
        </swiper-slide>
    {/each }
</swiper-container>
<Pager />