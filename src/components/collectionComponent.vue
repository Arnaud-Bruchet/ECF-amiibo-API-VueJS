<template>
    <!-- Main -->
    <section id="main">
        <div class="container">

            <!-- Content -->
            <article class="box post">

                <header>
                    <h2>Ma Collection</h2>
                    <p>( {{amiibos.length}} amiibos )</p>
                </header>
                <p>
                <table>
                    <tr>
                        <th>Character</th>
                        <th>game Series</th>
                        <th>Action</th>
                    </tr>
                    <tr v-for="amiibo in amiibos" :key="amiibo.tail">
                        <td>{{amiibo.character}}</td>
                        <td>{{amiibo.gameSeries}}</td>
                        <td>
                            <button>
                                <router-link :to="'/detail/'+amiibo.tail">VOIR</router-link>
                            </button>
                        </td>
                    </tr>
                </table>
                </p>

            </article>

        </div>
    </section>
</template>

<script>

export default {
    name: 'collectionComponent',
    props: {
        amiibos: {
            type: Array,
        }
    },
    components: {
    }
}
</script>

<style scoped>
button a {
    color: #fff;
    text-decoration: none;
}
</style>
