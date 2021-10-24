<template>
    <div>
        <img alt="Vue logo" src="./assets/logo.png">
        <button @click="this.fetchMatches" style="width: 100px;height: 100px">Nyomj meg</button>
        <BetTable :matches="this.matches"/>
    </div>
</template>

<script>
    import BetTable from './components/Table.vue'
    import {getMatches} from './services/httpService.ts'
    import {ref} from 'vue';

    export default {
        name: 'App',
        components: {
            BetTable
        },
        setup: () => {
            let matches = ref({});

            async function fetchMatches() {
                const [error, data] = await getMatches();
                if (error) console.log(error);
                else {
                    console.log(this.matches)
                    this.matches = data;
                }
            }

            return {
                matches,
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
