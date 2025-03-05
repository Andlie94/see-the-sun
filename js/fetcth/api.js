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
}

fetchApi().catch(console.error);