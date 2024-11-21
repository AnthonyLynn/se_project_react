import "./ItemCard.css";

function ItemCard({ onCardClick, item }) {
  function handleCardClick() {
    onCardClick(item);
  }

  return (
    <li className="item-card" onClick={handleCardClick}>
      <p className="item-card__label">{item.name}</p>
      <img src={item.imageUrl} alt="Clothes" className="item-card__icon" />
    </li>
  );
}

export default ItemCard;
