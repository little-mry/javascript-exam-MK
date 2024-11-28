import { elements, bodiesElement } from "./dom.js";
import { getKey, getPlanets} from "./apis.js";

const initEventListener = async () => {
  let apiKey = null;
  if (!apiKey) apiKey = await getKey();

  for (let index = 0; index < bodiesElement.length; index++) {
    bodiesElement[index].addEventListener("click", async () => {
      try {
        const data = await getPlanets(apiKey);
        const bodyInfo = data.bodies[index];

        if (bodyInfo) {
          displayInfo(bodyInfo);
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

  bodyInfo.moons.forEach((element) => {
    let moon = document.createElement("p");
    moon.className = "data";
    elements.moonList.appendChild(moon);
    moon.innerText = element.toUpperCase();
  });

  elements.exitBtn.addEventListener("click", () => {
    elements.moonList.innerText = "";

    elements.startSite.style.display = "flex";
    elements.planetsSite.style.display = "none";
  });
};

initEventListener();
