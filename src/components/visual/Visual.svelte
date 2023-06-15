<script>
    import '@scss/visual/style.scss';
    import { register } from 'swiper/element/bundle';
    import Swiper from './Swiper.svelte';
    import { visual } from '../../assets/js/visual'

    export let w;

    register();
    const visuals = visual;
</script>

<section class="visual">
    <h2 class="blind">메인 스와이퍼</h2>
    <Swiper items={ visuals } { w } />
</section>