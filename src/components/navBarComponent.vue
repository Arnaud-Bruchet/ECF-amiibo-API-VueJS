<template>
    <!-- Nav -->
    <nav id="nav">
        <ul>
            <li class="current">
                <router-link to="/">Home</router-link>
            </li>
            <!-- <li><a href="left-sidebar.html">Pokémons</a></li> -->
            <li>
                <router-link to="/liste">Liste Amiibo</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>

export default {
    name: 'navBarComponent',
    props: {
    },
    components: {
    }
}
</script>


<style scoped>
nav a.router-link-exact-active {
    background-color: #d52349 !important;
    color: #fff !important;
    font-weight: bold;
}
</style>