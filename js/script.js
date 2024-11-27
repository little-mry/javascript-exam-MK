import { elements, bodiesElement } from "./dom.js";
import { getKey, getPlanets } from "./apis.js"

let apiKey = null;

console.log(bodiesElement);


const initEventListener = async () => {
    if (!apiKey) {
        apiKey = await getKey()
    } 
    
    for (let index = 0; index < bodiesElement.length; index++) {
        bodiesElement[index].addEventListener('click', async () => {
            try {              
                const data = await getPlanets(apiKey);
                console.log(data);
                
                const bodyInfo = data.bodies[index]

                if (bodyInfo) {
                    displayInfo(bodyInfo)
                } else {
                    console.log(`hittade ingen info för indexvärde ${index}`);
                }  
            } catch (error) {
                console.error("Ett fel inträffade:", error);
            }
        })
    }
}
/* 
elements.sun.addEventListener('click', async () => {
    try {
        const key = await getKey();
        
        const data = await getPlanets(key);
        console.log(data);

        displayInfo(data.bodies[0])
        
    } catch (error) {
        console.error("Ett fel inträffade:", error);
    }
    
})  */

const displayInfo = (bodyInfo) => {
 console.log(bodyInfo);

 elements.startSite.style.display = 'none'
 elements.planetsSite.style.display = 'flex'

 elements.planetName.innerText = bodyInfo.name
 elements.planetNameLatin.innerText = bodyInfo.latinName //toUpperCase
 elements.planetText.innerText = bodyInfo.desc
 elements.dataCircumference.innerText = `${bodyInfo.circumference} KM`
 elements.dataMaxTemp.innerText = `${bodyInfo.temp.day} C`
 elements.dataMinTemp.innerText = `${bodyInfo.temp.night} C`
 elements.dataKmSun.innerText = `${bodyInfo.distance} KM`

// elements.moonContainer
}

initEventListener()