<template>
    <!-- Intro -->
    <section id="intro" class="container">
        <div class="row">
            <div class="col-4 col-12-medium" v-for="(amiibo, index) in randomAmiibos" :key="index">
                <section @click="getDetail(amiibo.tail)" class="middle">
                    <img :src="amiibo.image" />
                    <header>
                        <h2>{{amiibo.character}}</h2>
                    </header>
                    <p>{{amiibo.gameSeries}}</p>
                </section>
            </div>
        </div>
        <footer>
            <ul class="actions">
                <li>
                    <router-link to="/liste" class="button large">Liste complère</router-link>
                </li>
            </ul>
        </footer>
    </section>
</template>

<script>
import axios from "axios";
const API_AMIIBO_URL = "https://amiiboapi.com/api/amiibo/"

export default {
    name: 'introComponent',
    data: () => ({
        amiibos: '',
        randomAmiibos: [],
    }),
    props: {
    },
    components: {
    },
    methods: {
        async getAmiibo() {
            let rep = await axios.get(API_AMIIBO_URL);
            this.amiibos = rep.data.amiibo;
            for (let i = 0; i < 3; i++) {
                let number = this.randomNumber();
                this.randomAmiibos.push(this.amiibos[number]);
            }
            console.log(this.randomAmiibos);
        },
        randomNumber() {
            return Math.floor(Math.random() * this.amiibos.length);
        },
        getDetail(tail) {
            this.$router.push({ name: 'detail', params: { tail: tail } });
        }
    },
    async created() {
        await this.getAmiibo();
    }
}
</script>

<style scoped>
section .middle {
    cursor: pointer;
}
</style>