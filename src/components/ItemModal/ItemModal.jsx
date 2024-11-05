import "./ItemModal.css";

function ItemModal(props) {
  return (
    <div className="item-modal">
      <article className="item-modal__content">
        <button
          type="button"
          className="item-modal__close-btn"
          onClick={props.onClose}
        />
        <img src={props.imageUrl} alt="Item" className="item-modal__image" />
        <div className="item-modal__info">
          <h2 className="item-modal__title">{props.title}</h2>
          <p className="item-modal__caption">{`Weather: ${props.weather}`}</p>
        </div>
      </article>
    </div>
  );
}

export default ItemModal;
