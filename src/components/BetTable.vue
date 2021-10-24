<template>
    <div v-for="(league,index) in matches" :key="index" class="wrapper">
        <h3>{{league.leagueName}}</h3>
        <table id="keywords" cellspacing="0" cellpadding="0">
            <thead>
            <tr>
                <th width="20%">Match</th>
                <th>egymás elleni átlag</th>
                <th>egymás elleni 0-0</th>
                <th>hazai csapat átlag gól</th>
                <th>hazai csapat 0-0</th>
                <th>vendég csapat átlag gól</th>
                <th>vendég csapat 0-0</th>
            </tr>
            </thead>
            <tbody v-for="match in league.leagueMatches" :key="match.matchId">
            <tr>
                <td>{{match.homeTeam?.name}} : {{match.awayTeam?.name}}</td>
                <td>valami</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            </tbody>
        </table>
    </div>
    <!--<div>
        <div v-for="(match,index) in this.matches" :key="index">
            <div v-for="(leagueMatch,i) in match.leagueMatches" :key="i">
                {{leagueMatch.homeTeam}} :: {{leagueMatch.awayTeam}}
            </div>
        </div>
    </div>-->
</template>

<script lang="ts">
    import {defineComponent, PropType} from 'vue';
    import {League} from "@/models/league.ts";


    export default defineComponent({
        name: 'BetTable',
        props: {
            matches: {
                type: Object as PropType<League[]>
            }
        }
    })
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Amarante');

    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
    }

    html {
        overflow-y: scroll;
    }

    body {
        background: #eee url('https://i.imgur.com/eeQeRmk.png'); /* https://subtlepatterns.com/weave/ */
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-size: 16px;
        line-height: 1.7;
        display: flex;
        justify-content: center;
    }

    thead {
        display: flex;
        flex-direction: column;
        width: 80vw;
    }

    tr {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px 0;
    }

    thead > tr {
        background-color: #B1D0FF;
    }

    th, td {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px 15px;
    }

    .wrapper {
        background-color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2rem 0 0;
        width: 90vw;
    }
</style>