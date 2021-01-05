import axios from 'axios';
export default class TeamInfo {
    constructor(id) {
        this.id = id;
    }

    async getTeamInfo() {
        try {
            console.log("this.id" + this.id);
            const rest = await axios(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${this.id}`);
            this.data = rest.data.teams[0];
            this.backgroundImg = rest.data.teams[0].strTeamFanart1;
            this.info = rest.data.teams[0].strDescriptionEN;
            this.yearFormed = rest.data.teams[0].intFormedYear;
            this.teamName = rest.data.teams[0].strTeam;
            return this.data;
        } catch (error) {
            alert(error);
        }
    }
}
