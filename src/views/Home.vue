<template>
    <div class="home">
        <button @click="this.getData" style="height: 40px;width: 100px">push</button>
        <BetTable :matches="this.leagues"/>
    </div>
</template>

<script lang="ts">
    import {defineComponent, ref} from 'vue';
    import {getMatches} from "@/service/httpService";
    import {League} from "@/models/league.ts";
    import BetTable from "@/components/BetTable.vue";

    export default defineComponent({
        name: 'Home',
        components: {
            BetTable
        },
        setup: () => {
            let leagues = ref<League[]>();

            async function getData() {
                const [error, data] = await getMatches()

                leagues.value = JSON.parse(JSON.stringify(data));
                /*for (let match of leagues.value) {
                    for (let valami of match.leagueMatches) {
                        console.log(valami.homeTeam.name)
                    }
                }*/

            }

            return {
                getData,
                leagues
            }
        }
    });
</script>
