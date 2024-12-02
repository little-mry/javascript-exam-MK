//main-modul som hämtar info från de andra modulerna när man klickar på en planet
import { bodiesElement } from "./elem.js";
import { getKey, getPlanets} from "./api.js";
import { displayInfo , changePlanetColor } from "./display.js"
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



initEventListener();