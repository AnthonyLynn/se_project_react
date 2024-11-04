import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";

import "./Main.css";

function Main(props) {
  return (
    <>
      <WeatherCard
        temp={props.temp}
        weather={props.weather}
        timeOfDay={props.timeOfDay}
      />
      <ItemCard />
    </>
  );
}

export default Main;
