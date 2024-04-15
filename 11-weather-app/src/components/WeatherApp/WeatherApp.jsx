import { useState } from "react";
import "./styles.css";
import clearIcon from "../../assets/clear.png";
import cloudIcon from "../../assets/cloud.png";
import drizzleIcon from "../../assets/drizzle.png";
import humidityIcon from "../../assets/humidity.png";
import rainIcon from "../../assets/rain.png";
import searchIcon from "../../assets/search.png";
import snowIcon from "../../assets/snow.png";
import windIcon from "../../assets/wind.png";

export default function WeatherApp() {
  const API_KEY = "";
  const [currIcon, setCurrIcon] = useState(clearIcon); // Default current icon

  const weatherIconMap = {
    "01d": clearIcon,
    "01n": clearIcon,
    "02d": cloudIcon,
    "02n": cloudIcon,
    "03d": cloudIcon,
    "03n": cloudIcon,
    "04d": cloudIcon,
    "04n": cloudIcon,
    "09d": drizzleIcon,
    "09n": drizzleIcon,
    "10d": rainIcon,
    "10n": rainIcon,
    "11d": rainIcon,
    "11n": rainIcon,
    "13d": snowIcon,
    "13n": snowIcon,
    "50d": cloudIcon,
    "50n": cloudIcon,
  };

  const searchPlace = async () => {
    const cityInput = document.querySelector(".city-input");
    const humidity = document.querySelector(".humidity-percentage");
    const wind = document.querySelector(".wind-rate");
    const temperature = document.querySelector(".weather-temp");
    const location = document.querySelector(".weather-location");

    const city = cityInput.value || "colombo";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    if (city === "") return 0;

    try {
      const response = await fetch(URL);
      const data = await response.json();

      const {
        wind: { speed: windRate },
        main: { temp, humidity: humidityPercentage },
        name,
        weather: [{ icon: weatherIconCode }],
      } = data;

      setCurrIcon(weatherIconMap[weatherIconCode]);

      humidity.innerHTML = `${humidityPercentage}%`;
      wind.innerHTML = `${windRate} km/h`;
      temperature.innerHTML = `${Math.floor(temp)}℃`;
      location.innerHTML = `${name}`;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="city-input" placeholder="Search" />
        <div className="search-icon">
          <img src={searchIcon} alt="search icon" onClick={searchPlace} />
        </div>
      </div>
      <div className="weather-image">
        <img src={currIcon} alt="cloud icon" />
      </div>
      <div className="weather-temp">24℃</div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
          <img src={humidityIcon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percentage">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={windIcon} alt="" className="icon" />
          <div className="data">
            <div className="wind-rate">18 kmh</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
}
