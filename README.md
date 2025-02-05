# Weather App

Welcome to the Weather App repository! This application provides real-time weather information for any city worldwide, offering users an intuitive and responsive interface to stay updated with current weather conditions.

---

## Features

- **Real-Time Weather Data**: Fetches and displays current weather details, including temperature, humidity, wind speed, and weather conditions.
- **City Search**: Allows users to search for weather information by entering the name of any city.

---

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript
- **API**: [OpenWeatherMap API](https://openweathermap.org/api) for retrieving weather data
- **Build Tool**: [Vite](https://vitejs.dev/) for rapid development and optimized builds
- **Framework**: [React](https://reactjs.org/) for building user interfaces

---

## Getting Started

To run this project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/vedant-2701/Weather-App.git
   cd Weather-App

2. **Install Dependencies**:
    ```bash
   npm install

3. **Obtain API Key**:
- Sign up at [OpenWeatherMap API](https://home.openweathermap.org/users/sign_in) to get a free API key.
- Create a **.env** file in the root directory and add your API key:
    ```bash
   REACT_APP_WEATHER_API_KEY=your_api_key_here

4. **Start the Application**:
    ```bash
    npm run dev

The app will be available at [http://localhost:3000](http://localhost:3000).

---

## Usage

- **Search for a City**: Enter the name of the city in the search bar and press Enter. The app will display the current weather information for the specified city.
- **View Weather Details**: The main interface shows temperature, weather conditions, humidity, and wind speed.
