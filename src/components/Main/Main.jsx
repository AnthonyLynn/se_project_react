import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";

import "./Main.css";

/* TODO delete after finishing */
import { defaultClothingItems } from "../../utils/constants.js";

function Main({ weatherData, onCardClick }) {
  return (
    <>
      <WeatherCard weatherData={weatherData} />
      <p className="main__text">
        Today is {weatherData.temp.F}&deg;F / You may want to wear:
      </p>
      <ul className="main__items">
        {defaultClothingItems
          .filter((item) => {
            return item.weather === weatherData.type;
          })
          .map((item) => {
            return (
              <ItemCard key={item._id} onCardClick={onCardClick} item={item} />
            );
          })}
      </ul>
    </>
  );
}

export default Main;
