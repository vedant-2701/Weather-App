import SearchBox from './search/SearchBox';
import InfoBox from './/info/box/InfoBox';
import { useState } from 'react';

export default function WeatherApp() {

    const [weatherInfo, setWeatherInfo] = useState({
        city: "Solapur",
        country: "India",
        feelsLike: 29.29,
        humidity: 29,
        temp: 30.64,
        tempMax: 30.64,
        tempMin: 30.64,
        weather: "Clear",
    });

    let updateWeather = (newInfo) => {        
        setWeatherInfo(newInfo);
    };

    return (
        <div style={{textAlign: "center"}}>
            <h1>Weather App</h1>
        
            <SearchBox updateInfo={updateWeather} />
            <InfoBox info={weatherInfo} />
        </div>
    );
};
