import { useContext } from "react";
import { TemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";
import { WeatherContext } from "../../contexts/WeatherContext.js";
import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";

function ClothesSection({ onCardClick, items, profileOpen }) {
  const { weatherData } = useContext(WeatherContext);
  const { currentTemperatureUnit } = useContext(TemperatureUnitContext);

  return (
    <section className="clothes-section">
      <div className="clothes-section__text-container">
        <p className="clothes-section__text">
          Today is {weatherData.temp[currentTemperatureUnit]}&deg;
          {currentTemperatureUnit} / You may want to wear:
        </p>
        <button
          className={`clothes-section__button ${
            profileOpen && "clothes-section__button_active"
          }`}
        >
          + Add new
        </button>
      </div>
      <ul className="clothes-section__items">
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
    </section>
  );
}

export default ClothesSection;
