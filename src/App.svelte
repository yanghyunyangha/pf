<script>
    import classNames from 'classnames/bind'
    import Header from "./components/header/Header.svelte";
    import Visual from './components/visual/Visual.svelte';
    import Portfolio from './components/portfolio/Portfolio.svelte';
</script>

<Header { classNames } />
<Visual { classNames } />
<main>
    <Portfolio { classNames } />
</main>
