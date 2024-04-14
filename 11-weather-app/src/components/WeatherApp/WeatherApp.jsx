import "./styles.css";
// import clearIcon from "../../assets/clear.png";
// const cloudIcon = require("../../assets/cloud.png");
// const drizzleIcon = require("../../assets/drizzle.png");
// const humidityIcon = require("../../assets/humidity.png");
// const rainIcon = require("../../assets/rain.png");
import searchIcon from "../../assets/search.png";
// const snowIcon = require("../../assets/snow.png");
// const windIcon = require("../../assets/wind.png");

export default function WeatherApp() {
  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="city-input" placeholder="Search" />
        <div className="search-icon">
          <img src={searchIcon} alt="search icon" />
        </div>
      </div>
    </div>
  );
}
