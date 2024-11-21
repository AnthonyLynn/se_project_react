import ItemCard from "../ItemCard/ItemCard";

import "./ClothesSection.css";

function ClothesSection({ onCardClick, items, weatherData, shouldFilter }) {
  return (
    <ul className="clothes-section">
      {items
        .filter((item) => {
          return shouldFilter ? item.weather === weatherData.type : true;
        })
        .map((item) => {
          return (
            <ItemCard key={item._id} onCardClick={onCardClick} item={item} />
          );
        })}
    </ul>
  );
}

export default ClothesSection;
