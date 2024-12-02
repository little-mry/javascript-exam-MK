//modul för  display
import { elements, planetColors } from "./elem.js";

export const displayInfo = (bodyInfo) => {
    elements.startSite.style.display = "none";
    elements.planetsSite.style.display = "flex";
    
    elements.planetName.innerText = bodyInfo.name.toUpperCase();
    elements.planetNameLatin.innerText = bodyInfo.latinName.toUpperCase();
    elements.planetText.innerText = bodyInfo.desc;
    elements.dataCircumference.innerText = `${bodyInfo.circumference.toLocaleString()} KM`;
    elements.dataMaxTemp.innerText = `${bodyInfo.temp.day} °C`;
    elements.dataMinTemp.innerText = `${bodyInfo.temp.night} °C`;
    elements.dataKmSun.innerText = `${bodyInfo.distance.toLocaleString()} KM`;
  
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
  
export const changePlanetColor = (bodyInfo) => {
    for (let index = 0; index < planetColors.length; index++) {
        if (index == bodyInfo.id) {
            elements.bigPlanetOne.style.background = planetColors[index].fig1 
            elements.bigPlanetTwo.style.background = planetColors[index].fig2
            elements.bigPlanetThree.style.background = planetColors[index].fig3
        } 
    }
}