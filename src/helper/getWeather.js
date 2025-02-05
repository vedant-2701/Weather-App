const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather`;
const API_KEY = "915c193f1f828cb10ac70ee325b9105f";

async function getWeather(city) {
    let response = await fetch(`${WEATHER_API}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse = await response.json();

    console.log(jsonResponse);

    let result = {
        city: jsonResponse.name,
        country: jsonResponse.sys.country,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].main
    };
    console.log(result);
    
    return result;
}

export { getWeather };