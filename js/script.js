import { elements, bodiesElement } from "./dom.js";
import { getKey, getPlanets } from "./apis.js"

const initEventListener = () => {
    for (let index = 0; index < bodiesElement.length; index++) {
        bodiesElement[index].addEventListener('click', async () => {
            try {
                const key = await getKey();
                
                const data = await getPlanets(key);
                console.log(data);
        
                displayInfo(data.bodies[index])
                
            } catch (error) {
                console.error("Ett fel inträffade:", error);
            }
        })
    }
}

/* elements.sun.addEventListener('click', async () => {
    try {
        const key = await getKey();
        
        const data = await getPlanets(key);
        console.log(data);

        displayInfo(data.bodies[0])
        
    } catch (error) {
        console.error("Ett fel inträffade:", error);
    }
    
}) */

const displayInfo = (bodyInfo) => {
 console.log(bodyInfo);

 elements.startSite.style.display = 'none'
 elements.planetsSite.style.display = 'flex'

 elements.planetName.innerText = bodyInfo.name
 
}

initEventListener()