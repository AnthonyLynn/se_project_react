import { weatherImages } from "../../utils/constants.js";

import "./WeatherCard.css";

function WeatherCard(props) {
  /* props.dt >= props.sunrise || props.dt <= props.sunset*/

  const icon = weatherImages[props.weather][props.timeOfDay];
  console.log(weatherImages[props.weather]);
  console.log(props);

  return (
    <section className="weather-card">
      <p className="weather-card__temprature">{props.temp}&deg;F</p>
      <img src={icon} alt="Sky" className="weather-card__icon" />
    </section>
  );
}

export default WeatherCard;
