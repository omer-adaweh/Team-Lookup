import axios from 'axios';
export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        try {
            const res = await axios(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${this.query}`);
            this.result = res;
            this.teamId = res.data.teams[0].idTeam;
            return this.result;
        } catch (error) {
            alert(error);
        }
    }
}
