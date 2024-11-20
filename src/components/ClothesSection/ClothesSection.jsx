import ItemCard from "../ItemCard/ItemCard";

import "./ClothesSection.css";

function ClothesSection({ onCardClick, items, weatherData }) {
  return (
    <ul className="clothes-section">
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
  );
}

export default ClothesSection;
