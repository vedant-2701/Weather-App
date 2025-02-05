export default function WeatherDetails({info}) {
    return (
        <div>
            <p><strong>Temperature:</strong> {info.temp}°C</p>
            <p><strong>Feels Like:</strong> {info.feelsLike}°C</p>
            <p><strong>Max Temperature:</strong> {info.tempMax}°C</p>
            <p><strong>Min Temperature:</strong> {info.tempMin}°C</p>
            <p><strong>Humidity:</strong> {info.humidity}%</p>
        </div>
    );
};
