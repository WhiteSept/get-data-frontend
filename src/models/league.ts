import {RawMatch} from "@/models/rawMatch";
import {Match} from "@/models/match";

export class League {
    leagueName: string = '';

    rawLeagueMatches: RawMatch[] = [];

    leagueMatches: Match[] = [];
}