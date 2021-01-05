import { elements } from "./base";
export const renderResults = (data) => {
  // if (elements.mainBody != null) {
  //   elements.infoSection.innerHTML = "";
  // }
  console.log("data for image is " + data.backgroundImg);
  console.log(elements.infoSection);

  renderText(data);
  document.querySelector(
    ".teamInfo"
  ).style.cssText = `background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${data.backgroundImg})`;
};

const renderText = (data) => {
  console.log("The infosection is made");

  const markup = `
  <section class="teamInfo" id="team-Info" href="info-section">
      <div class="team-info-con">
          <div class="info-header">
              <h1>${data.teamName}</h1>
              <h2>${data.yearFormed}</h2>
          </div>
      
          <h1 class="team-info-text">${fixText(data)}</h1>
         
          
      </div>
    </section>
    `;
  console.log("pasting 1st  section");
  document.querySelector(".mainBody").insertAdjacentHTML("beforeend", markup);
};

// Produces well formmatted paragraphs for team description
const fixText = (data) => {
  console.log(data);
  let x = 0;
  let array = [];
  for (let c of data.info) {
    x += 1;
    if (x >= 700 && c === ".") {
      x = 0;
      array.push(c);
      array.push("<br><br>");
      continue;
    }
    array.push(c);
  }
  console.log(array.join(""));
  return array.join("");
};
