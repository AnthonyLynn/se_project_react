import Modal from "../Modal/Modal";

import "./ItemModal.css";

function ItemModal({ name, onClose, onOutsideClick, activeModal, item }) {
  return (
    <Modal
      name={name}
      type="item"
      onClose={onClose}
      onOutsideClick={onOutsideClick}
      activeModal={activeModal}
    >
      <img src={item.link} alt="Item" className="item-modal__image" />
      <div className="item-modal__info">
        <h2 className="item-modal__title">{item.name}</h2>
        <p className="item-modal__caption">{`Weather: ${item.weather}`}</p>
      </div>
    </Modal>
  );
}

export default ItemModal;
