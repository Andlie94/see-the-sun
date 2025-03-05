import { fetchApi } from "../fetcth/api.js";

function displayWeather() {
    const weatherElement = document.getElementById("weather");

    if (!weatherElement) {
        console.error('Elementet med ID "weather" finnes ikke!');
        return; 
    }

    fetchApi()
        .then(data => {
            console.log("API-data mottatt:", data); 


            const weatherCode = data?.properties?.timeseries[0]?.data?.next_1_hours?.summary?.symbol_code;


            const weatherDescriptions = {
                "cloudy": "Overskyet",
                "clear": "Klar himmel",
                "rainy": "Regn",
                "snowy": "Snø",
                "partly_cloudy": "Delvis overskyet",
            };

            const weatherDescription = weatherDescriptions[weatherCode] || "Ukjent vær";


            weatherElement.textContent = `Vær: ${weatherDescription}`;
        })
        .catch(error => {
            console.error("Feil ved henting av værdata:", error);
            weatherElement.textContent = "Kunne ikke hente værbeskrivelse";
        });
}


displayWeather();
