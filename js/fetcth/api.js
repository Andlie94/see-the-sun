export async function fetchApi() {
    const response = await fetch('https://cors-anywhere.herokuapp.com/https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=59.9139&lon=10.7522', {
        headers: {
            "User-Agent": "MinVærApp/1.0 (andre.strm@yahoo.no)"
        }
    });

    if (!response.ok) {
        throw new Error("Kunne ikke hente data");
    }

    const data = await response.json(); 
    console.log(data); 
    return data;
}
fetchApi().catch(console.error);

export async function fetchMarbella() {
    const response = await fetch('https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=36.5101&lon=-4.8825', {
        headers: {
            "User-Agent": "MinVærApp/1.0 (andre.strm@yahoo.no)"
        }
    });

    if (!response.ok) {
        throw new Error("Kunne ikke hente data");
    }

    const data = await response.json(); 
    console.log(data); 
    return data;
}


fetchMarbella().catch(console.error);