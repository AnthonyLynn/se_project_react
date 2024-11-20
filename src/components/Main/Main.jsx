import { useContext } from "react";
import { TemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";

import WeatherCard from "../WeatherCard/WeatherCard";
import ClothesSection from "../ClothesSection/ClothesSection";

import "./Main.css";

function Main({ onCardClick, items, weatherData }) {
  const { currentTemperatureUnit } = useContext(TemperatureUnitContext);

  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <p className="main__text">
        Today is {weatherData.temp[currentTemperatureUnit]}&deg;
        {currentTemperatureUnit} / You may want to wear:
      </p>
      <ClothesSection
        onCardClick={onCardClick}
        items={items}
        weatherData={weatherData}
      />
    </main>
  );
}

export default Main;
