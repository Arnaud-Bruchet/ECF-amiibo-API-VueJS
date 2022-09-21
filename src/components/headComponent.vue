<template>
    <NavBarComponent />
</template>

<script>
import navBarComponent from "./navBarComponent.vue";
export default {
    name: 'headComponent',
    props: {
    },
    components: {
        navBarComponent,
    }
}
</script>
