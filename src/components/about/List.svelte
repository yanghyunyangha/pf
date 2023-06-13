<script>
    import project from "@images/common/icon_project.png";
    import style from "@images/common/icon_style.png";
    import script from "@images/common/icon_script.png";
    export let styles
</script>

<div class="flex { styles.list }">
    <dl>
        <dt class="medium flex">
            <span class="{styles.icon}">
                <img src="{project}" alt="">
            </span>
            Project
        </dt>
        <dd class="">
            - HTML <br>
            - php <br>
            - asp <br>
            - Svelte
        </dd>
        <dd class="{ styles.num }">01</dd>
    </dl>
    <dl>
        <dt class="medium flex">
            <span class="{styles.icon}">
                <img src="{style}" alt="">
            </span>
            Styles
        </dt>
        <dd class="">
            - CSS <br>
            - Scss <br>
            - SASS <br>
            - CSS-Module
        </dd>
        <dd class="{ styles.num }">02</dd>
    </dl>
    <dl>
        <dt class="medium flex">
            <span class="{styles.icon}">
                <img src="{script}" alt="">
            </span>
            Script
        </dt>
        <dd class="">
            - Javascript <br>
            - jQuery <br>
            - Node.js
        </dd>
        <dd class="{ styles.num }">03</dd>
    </dl>
</div>