import Modal from "../Modal/Modal";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

import "./ItemModal.css";

function ItemModal({ name, onClose, activeModal, item, openDeleteModal }) {
  const { currentUser } = useContext(CurrentUserContext);
  const isOwn = item.owner === currentUser._id;

  return (
    <Modal name={name} type="item" onClose={onClose} activeModal={activeModal}>
      <img src={item.imageUrl} alt="Item" className="item-modal__image" />
      <div className="item-modal__info">
        <span className="item-modal__span">
          <h2 className="item-modal__title">{item.name}</h2>
          {isOwn && (
            <button className="item-modal__button" onClick={openDeleteModal}>
              Delete item
            </button>
          )}
        </span>
        <p className="item-modal__caption">{`Weather: ${item.weather}`}</p>
      </div>
    </Modal>
  );
}

export default ItemModal;
