import { weatherImages } from "../../utils/constants.js";

import "./WeatherCard.css";

function WeatherCard({ weatherData }) {
  /* props.dt >= props.sunrise || props.dt <= props.sunset*/

  let icon;
  if (weatherImages[weatherData.condition]) {
    icon = weatherImages[weatherData.condition][weatherData.timeOfDay];
  } else {
    icon = weatherImages["default"][weatherData.timeOfDay];
  }

  return (
    <section className="weather-card">
      <h1 className="weather-card__temprature">{weatherData.temp.F}&deg;F</h1>
      <img src={icon} alt="Sky" className="weather-card__icon" />
    </section>
  );
}

export default WeatherCard;
