<template>
    <div id="page-wrapper">
        <!-- Header -->
        <section id="header">
            <siteTitleComponent />
            <navBarComponent />
        </section>
        <cardAmiibo :amiibo="amiibo" />
        <footerComponent />
    </div>
</template>

<script>
import navBarComponent from '@/components/navBarComponent.vue';
import footerComponent from '@/components/footerComponent.vue';
import siteTitleComponent from '@/components/siteTitleComponent.vue';
import cardAmiibo from '@/components/cardAmiibo.vue';
import axios from 'axios';
const API_AMIIBO_URL = "https://amiiboapi.com/api/amiibo/"

export default {
    name: 'AmiiboDetail',
    data: () => ({
        amiibo: {},
    }),
    props: {
    },
    components: {
        navBarComponent,
        footerComponent,
        siteTitleComponent,
        cardAmiibo,
    },
    methods: {
        async getOneAmiibo() {
            let { tail } = this.$route.params;
            console.log(tail);
            let rep = await axios.get(API_AMIIBO_URL + '?tail=' + tail);
            this.amiibo = rep.data.amiibo[0];
            console.log(this.amiibo);
        }
    },
    async created() {
        await this.getOneAmiibo();
    }
}
</script>
