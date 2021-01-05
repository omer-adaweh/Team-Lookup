import Search from "./models/Search";
import * as eventView from "./views/event";
import Event from "./models/Event";
import TeamInfo from "./models/TeamInfo";
import * as searchView from "./views/seachView";
import * as teamInfo from "./views/teamInfo";
import { elements } from "./views/base";

const state = {};

// $(".js--scroll-to-info").click(function() {
//   $("html, body").animate({ scrollTop: $(".info-section").offset().top }, 1000);
// });
// $(".js--scroll-to-scores").click(function() {
//   $("html, body").animate({ scrollTop: $(".scoreBoard").offset().top }, 1000);
// });
const controlSearch = async () => {
  // 1) Get query from view
  const query = searchView.getInput();

  if (query) {

    // 2) New search object and add to state
    state.search = new Search(query);

    // 3) Prepare UI for results
    searchView.clearInput();

    try {
  
      await state.search.getResults();
      // console.log("fff");
      controlTeamInfo();
    } catch (err) {
      alert(err);
    }
  }
};

const controlTeamInfo = async () => {
  state.data = new TeamInfo(state.search.teamId);
  await state.data.getTeamInfo();
  teamInfo.renderResults(state.data);
  controlEvent();
};

const controlEvent = async () => {
  let array = [];
  state.allEvents = [];
  state.eventList = new Event(state.search.teamId);
  await state.eventList.getListEvent(array, state.search.teamId);
  console.log(array);

  eventView.clearScoreboard();
  array.forEach(async (el, index) => {
    state.allEvents[index] = new Event(array[index]);
    await state.allEvents[index].getEvent();
    eventView.renderResults(state.allEvents[index], state.data.backgroundImg);
  });
};

document.querySelector(".search-btn").addEventListener("click", (e) => {
  if (document.querySelector(".teamInfo") != null) {
    let aplha = document.getElementById("team-Info");
    let beta = document.getElementById("score-Board");
    aplha.remove();
    beta.remove();
  }
  controlSearch();
});

// elements.infoSection.addEventListener("click", (e) => {
//   if (e.target.matches(".btn-renderScore")) {
//     controlEvent();
//   }
// });
