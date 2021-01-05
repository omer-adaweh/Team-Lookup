import { elements } from "./base";

export const clearScoreboard = () => {
  if (elements.mainBody == null) {
    const markup = `
    <section class="scoreBoard" id="score-Board" href="scoreBoard-section">
      <h1 id="scoreTitle">Game Scores</h1>
      <div class="scoreBoard-grid"></div>
    </section>
    `;
   
    document.querySelector(".teamInfo").insertAdjacentHTML("beforeend", markup);
  }
};
export const renderResults = (data, backImg) => {
  console.log("data.homeTeam is " + data.homeTeam);

  const markup = `
    <div class="score-Container">
        <div class="team-One bord">
            <h3>${data.homeTeam}</h3>
            <h2>${data.homeScore}</h2>
        </div>
        <div class="full-Time  bord">FT</div>
        <div class="team-Two bord">
            <h3>${data.awayTeam}</h3>
            <h2>${data.awayScore}</h2>
        </div>
        <h3 class="date-Event">Date: ${data.dateEvent}</h3>
        <button class="but-Lights"><a href=${data.video} target="_blank">Highlights</a></button>
       
    
    </div>
    `;

  document
    .querySelector(".scoreBoard-grid")
    .insertAdjacentHTML("beforeend", markup);

  if (data.Image == null) {
    document.querySelector(
      ".score-Container:last-child"
    ).style.cssText = `background-image: url(${backImg})`;
  } else {
    document.querySelector(
      ".score-Container:last-child"
    ).style.cssText = `background-image: url(${data.Image})`;
  }
};
