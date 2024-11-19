import React from "react";
import { TemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";

import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";

import "./Main.css";

function Main({ weatherData, onCardClick, items }) {
  const { currentTemperatureUnit } = React.useContext(TemperatureUnitContext);

  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <p className="main__text">
        Today is {weatherData.temp[currentTemperatureUnit]}&deg;
        {currentTemperatureUnit} / You may want to wear:
      </p>
      <ul className="main__items">
        {items
          .filter((item) => {
            return item.weather === weatherData.type;
          })
          .map((item) => {
            return (
              <ItemCard key={item._id} onCardClick={onCardClick} item={item} />
            );
          })}
      </ul>
    </main>
  );
}

export default Main;
