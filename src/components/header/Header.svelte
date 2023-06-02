<script>
    import styles from './header.module.css'
    import Logo from './Logo.svelte';
    import Menu from './Menu.svelte';

    export let classNames

    const cn = classNames.bind(styles)
</script>

<header class="{ styles.header }">
    <div class="inner flex-between { styles.inner }">
        <Logo { styles } />
        <Menu { styles } />
    </div>
</header>