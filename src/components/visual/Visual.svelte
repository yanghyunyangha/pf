<script>
    import styles from './visual.module.css'
    import Swiper from './Swiper.svelte';
    import { visual } from './visual';

    export let classNames;

    const cn = classNames.bind(styles);
    const visuals = visual;

</script>

<section class="{ styles.visual }">
    <h2 class="blind">메인 스와이퍼</h2>
    <Swiper { styles } { cn } items={ visuals } />
    <div class="swiper-pagination flex-center { styles.paging }">
        
    </div>
</section>