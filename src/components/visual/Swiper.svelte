<script>
    import { gsap } from "gsap";
    import { Pagination, EffectFade, Autoplay } from "swiper";
    import { Swiper, SwiperSlide } from "swiper/svelte";
    import Item from "./Item.svelte";

    export let styles, items, cn, w;

    const onSlideChange = (e) => {
        const visibleItem = e.detail[0].visibleSlides[0];
        let targets = {
            name:visibleItem.querySelector('.name'),
            type:visibleItem.querySelector('.type'),
            more:visibleItem.querySelector('.more'),
            clip:visibleItem.querySelector('.clip'),
            circle:visibleItem.querySelector('.circle')
        }
        const tl = gsap.timeline();
        tl.fromTo(targets.name, {y:'100%'}, {y:0, duration:0.6, delay:0.2})
        .fromTo(targets.type, {y:'100%'}, {y:0, duration:0.6}, '<')
        .fromTo(targets.more, {y:50, opacity:0}, {y:0, opacity:1, duration:0.6, delay:0.2}, '<')
        .fromTo(targets.clip, {opacity:0}, {opacity:1, duration:0.6, delay:0.2}, '<')
        .fromTo(targets.circle, {scale:0}, {scale:1, duration:0.6}, '<');        
    }
</script>

<Swiper
    modules={[Pagination, EffectFade, Autoplay]}
    effect='fade'
    speed={800}
    loop={true}
    autoplay={{
        delay: 3000,
        disableOnInteraction: true
    }}
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