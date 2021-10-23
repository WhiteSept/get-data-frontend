<template>
    <div>
        <img alt="Vue logo" src="./assets/logo.png">
        <button @click="fetchMatches" style="width: 100px;height: 100px">Nyomj meg</button>
        <BetTable :matches="matches"/>
    </div>
</template>

<script>
    import BetTable from './components/Table.vue'
    import {getMatches} from './services/httpService.js'

    export default {
        name: 'App',
        components: {
            BetTable
        },
        setup() {
            function fetchMatches() {
                getMatches()
            }

            return {
                matches: Object,
                fetchMatches
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
