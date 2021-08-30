import axios from 'axios';
export default class Event {

    constructor(id) {
        this.eventId = id;
      
    }

    async getEvent() {
      
        try {
          const res = await axios(`https://www.thesportsdb.com/api/v1/json/1/lookupevent.php?id=${this.eventId}`);
          this.dateEvent = res.data.events[0].dateEvent;
          this.homeTeam = res.data.events[0].strHomeTeam;
          this.homeScore = res.data.events[0].intHomeScore;
          this.awayTeam = res.data.events[0].strAwayTeam;
          this.awayScore = res.data.events[0].intAwayScore;
          this.Image = res.data.events[0].strThumb;
          this.video = res.data.events[0].strVideo;
          return res.data.events[0];
           
    
         
        } catch (error) {
            alert(error);
        }
    }

    async getListEvent(array, teamId) {
        try {
            const rest = await axios(`https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=${teamId}`);
            array = rest.data.results.forEach((el, index) => {
                array[index] = parseInt(el.idEvent, 10);
            });
           
            return rest;
            // res.data.results.forEach(element => {
            //     console.log(element.idEvent);
                
            // });
    
           
        } catch (error) {
            alert(error);
        }
    };
}
