<template>
    <div>
        <img alt="Vue logo" src="./assets/logo.png">
        <button @click="fetchMatches" style="width: 100px;height: 100px">Nyomj meg</button>
        <BetTable :matches="matches"/>
    </div>
</template>

<script>
    import BetTable from './components/Table.vue'

    export default {
        name: 'App',
        components: {
            BetTable
        },
        data() {
            return {
                matches: Object,
            }
        },
        methods: {
            async fetchMatches() {
                this.matches = await this.$http.get('http://localhost:8080/api/league');
            }
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
