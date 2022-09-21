<template>
  <div id="page-wrapper">

    <!-- Header -->
    <section id="header">
      <siteTitleComponent />
      <navBarComponent />
    </section>

    <collectionComponent :amiibos='amiibos' />

    <footerComponent />
  </div>
</template>

<script>
import navBarComponent from '@/components/navBarComponent.vue';
import footerComponent from '@/components/footerComponent.vue';
import siteTitleComponent from '@/components/siteTitleComponent.vue';
import collectionComponent from '@/components/collectionComponent.vue';
import axios from 'axios';
const API_AMIIBO_URL = "https://amiiboapi.com/api/amiibo/"

export default {
  name: 'AmiiboList',
  data: () => ({
    amiibos: [],
  }),
  props: {
  },
  components: {
    navBarComponent,
    footerComponent,
    siteTitleComponent,
    collectionComponent
  },
  methods: {
    async getAmiibo() {
      let rep = await axios.get(API_AMIIBO_URL);
      this.amiibos = rep.data.amiibo;
      console.log(this.amiibos);
    },
  },
  async created() {
    await this.getAmiibo();
  }
}
</script>
