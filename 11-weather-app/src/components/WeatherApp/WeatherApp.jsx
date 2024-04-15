import "./styles.css";
// import clearIcon from "../../assets/clear.png";
import cloudIcon from "../../assets/cloud.png";
// import drizzleIcon fom "../../assets/drizzle.png";
import humidityIcon from "../../assets/humidity.png";
// import rainIcon from "../../assets/rain.png";
import searchIcon from "../../assets/search.png";
// import snowIcon from "../../assets/snow.png";
import windIcon from "../../assets/wind.png";

export default function WeatherApp() {
  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="city-input" placeholder="Search" />
        <div className="search-icon">
          <img src={searchIcon} alt="search icon" />
        </div>
      </div>
      <div className="weather-image">
        <img src={cloudIcon} alt="cloud icon" />
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
            <div className="humidity-percentage">18 kmh</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
}
