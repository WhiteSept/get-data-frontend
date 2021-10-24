import {VersusMatchHistory} from "@/models/versusMatchHistory";
import {Team} from "@/models/team";

export class Match {
    matchId: string = '';
    homeTeam: Team = new Team();
    awayTeam: Team = new Team();
    startDate: Date = new Date();
    league: string = '';
    country: string = '';
    versusHistory: VersusMatchHistory[] = [];
}