import "./ItemCard.css";

function ItemCard(props) {
  return (
    <li className="item-card" onClick={props.handleCardClick}>
      <p className="item-card__label">{props.item}</p>
      <img src={props.image} alt="Clothes" className="item-card__icon" />
    </li>
  );
}

export default ItemCard;
