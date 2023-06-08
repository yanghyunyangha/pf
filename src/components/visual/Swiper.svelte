<script>
    import { Pagination, EffectFade, Autoplay } from "swiper";
    import { Swiper, SwiperSlide } from "swiper/svelte";
    import Item from "./Item.svelte";

    export let styles, items, cn, w;
</script>

<Swiper
    modules={[Pagination, EffectFade, Autoplay]}
    effect='fade'
    speed={650}
    loop={true}
    pagination={{
        el: '.swiper-pagination',
        bulletElement: 'button',
        clickable: true,
        bulletActiveClass: 'active'
    }}
>
    { #each items as item, idx }
        <SwiperSlide>
            <Item { item } { idx } { styles } { cn } { w } />
        </SwiperSlide>
    { /each }
</Swiper>