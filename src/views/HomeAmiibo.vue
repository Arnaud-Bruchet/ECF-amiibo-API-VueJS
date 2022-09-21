<template>
  <div id="page-wrapper">
    <!-- Header -->
    <section id="header">
      <siteTitleComponent />
      <navBarComponent />
      <bannerComponent />
      <introComponent />
    </section>

    <footerComponent />

  </div>
</template>

<script>
import navBarComponent from "../components/navBarComponent.vue";
import bannerComponent from "../components/bannerComponent.vue";
import footerComponent from "../components/footerComponent.vue"
import siteTitleComponent from "@/components/siteTitleComponent.vue";
import introComponent from "../components/introComponent.vue";

export default {
  name: 'HomeAmiibo',
  components: {
    navBarComponent,
    bannerComponent,
    footerComponent,
    siteTitleComponent,
    introComponent
  }
}
</script>

