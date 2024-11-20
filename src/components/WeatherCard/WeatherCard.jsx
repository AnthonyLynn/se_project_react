import { useContext } from "react";
import { TemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";

import { weatherImages } from "../../utils/constants.js";

import "./WeatherCard.css";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(TemperatureUnitContext);

  let icon;
  if (weatherImages[weatherData.condition]) {
    icon = weatherImages[weatherData.condition][weatherData.timeOfDay];
  } else {
    icon = weatherImages["default"][weatherData.timeOfDay];
  }

  return (
    <section className="weather-card">
      <h1 className="weather-card__temprature">
        {weatherData.temp[currentTemperatureUnit]}&deg;{currentTemperatureUnit}
      </h1>
      <img src={icon} alt="Sky" className="weather-card__icon" />
    </section>
  );
}

export default WeatherCard;
