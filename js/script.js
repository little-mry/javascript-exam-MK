//main-modul som hämtar info från de andra modulerna när man klickar på en planet

import { elements, bodiesElement, planetColors } from "./elem.js";
import { getKey, getPlanets} from "./api.js";
let apiKey = null;

const initEventListener = async () => {
  if (!apiKey) apiKey = await getKey();

  for (let index = 0; index < bodiesElement.length; index++) {
    bodiesElement[index].addEventListener("click", async () => {
      try {
        const data = await getPlanets(apiKey);
        const bodyInfo = data.bodies[index];
        
        if (bodyInfo) {
          displayInfo(bodyInfo);
          changePlanetColor(bodyInfo);
        } else {
          console.log(`hittade ingen info för indexvärde ${index}`);
        }
      } catch (error) {
        console.error("Ett fel inträffade:", error);
      }
    });
  }
};

const displayInfo = (bodyInfo) => {
  elements.startSite.style.display = "none";
  elements.planetsSite.style.display = "flex";
  
  elements.planetName.innerText = bodyInfo.name.toUpperCase();
  elements.planetNameLatin.innerText = bodyInfo.latinName.toUpperCase();
  elements.planetText.innerText = bodyInfo.desc;
  elements.dataCircumference.innerText = `${bodyInfo.circumference} KM`;
  elements.dataMaxTemp.innerText = `${bodyInfo.temp.day} °C`;
  elements.dataMinTemp.innerText = `${bodyInfo.temp.night} °C`;
  elements.dataKmSun.innerText = `${bodyInfo.distance} KM`;

  if (bodyInfo.moons.length === 0) {
    elements.moonList.innerText = 'Denna himlakropp har inga månar'
  } else {
    bodyInfo.moons.forEach((element) => {    
      let moon = document.createElement("p");
      moon.className = "data";
      elements.moonList.appendChild(moon);
      moon.innerText = element 
    });
    
  }
  
  elements.exitBtn.addEventListener("click", () => {
    elements.moonList.innerText = "";
    
    elements.startSite.style.display = "flex";
    elements.planetsSite.style.display = "none";
  });
};

const changePlanetColor = (bodyInfo) => {
  for (let index = 0; index < planetColors.length; index++) {
    if (index == bodyInfo.id) {
      elements.bigPlanetOne.style.background = planetColors[index].fig1 
      elements.bigPlanetTwo.style.background = `${planetColors[index].fig2}`
      elements.bigPlanetThree.style.background = `${planetColors[index].fig3}`
    } 
  }
}

initEventListener();