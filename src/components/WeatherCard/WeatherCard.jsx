import { weatherImages } from "../../utils/constants.js";

import "./WeatherCard.css";

function WeatherCard(props) {
  /* props.dt >= props.sunrise || props.dt <= props.sunset*/

  const icon = weatherImages[props.weather][props.timeOfDay];

  return (
    <section className="weather-card">
      <h1 className="weather-card__temprature">{props.temp}&deg;F</h1>
      <img src={icon} alt="Sky" className="weather-card__icon" />
    </section>
  );
}

export default WeatherCard;
