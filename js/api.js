//modul med funktionerna som hämtar API-info
const baseUrl = 'https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com'

export const getKey = async () => {
    try {
        let response = await fetch(`${baseUrl}/keys`, {
            'method': 'POST'} )
        let key = await response.json()
        return key

    } catch (error) {
        console.log('Kunde inte hämta nyckeln', error); 
    }
}

export const getPlanets = async (key) => {
    try { 
        let response = await fetch(`${baseUrl}/bodies`, {
            'method': 'GET',
            'headers': {'x-zocom': `${key.key}`}
        })
        let data = await response.json()
        return data
        
    } catch (error) {
        console.log('Kunde inte hämta informationen', error);
    }
}
