import ItemCard from "../ItemCard/ItemCard";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

import "./ClothesSection.css";

function ClothesSection({
  onCardClick,
  onCardLike,
  items,
  weatherData,
  shouldFilterWeather,
  shouldFilterOwner,
}) {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <ul className="clothes-section">
      {items
        .filter((item) => {
          const isWeatherType = shouldFilterWeather
            ? item.weather === weatherData.type
            : true;
          const isOwner = shouldFilterOwner
            ? item.owner === currentUser._id
            : true;
          return isWeatherType && isOwner;
        })
        .map((item) => {
          return (
            <ItemCard
              key={item._id}
              onCardClick={onCardClick}
              item={item}
              onCardLike={onCardLike}
            />
          );
        })}
    </ul>
  );
}

export default ClothesSection;
