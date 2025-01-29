import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

import "./ItemCard.css";

function ItemCard({ onCardClick, item, onCardLike }) {
  const { currentUser } = useContext(CurrentUserContext);
  const isAuthorizedUser = item.owner === currentUser._id;
  const isLiked = item.likes.some((id) => id === currentUser._id);

  function handleClick(evt) {
    if (evt.target !== evt.currentTarget) {
      return;
    }

    onCardClick(item);
  }

  function handleLike() {
    onCardLike(item, isLiked);
  }

  return (
    <li className="item-card">
      <div className="item-card__label">
        <p className="item-card__name">{item.name}</p>
        {isAuthorizedUser && (
          <input
            type="checkbox"
            className="item-card__like-btn"
            checked={isLiked}
            onChange={handleLike}
          />
        )}
      </div>
      <img
        src={item.imageUrl}
        alt="Clothes"
        className="item-card__icon"
        onClick={handleClick}
      />
    </li>
  );
}

export default ItemCard;
