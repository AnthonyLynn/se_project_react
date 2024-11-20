import Modal from "../Modal/Modal";

import "./DeleteModal.css";

function DeleteModal({ name, onClose, activeModal, onDelete }) {
  return (
    <Modal
      name={name}
      type="delete"
      onClose={onClose}
      activeModal={activeModal}
    >
      <p className="delete-modal__confrimation">
        Are you sure you want to delete this item? <br /> This action is
        irreversible.
      </p>
      <button
        className="delete-modal__button delete-modal__button_type_delete"
        onClick={onDelete}
      >
        Yes, delete item
      </button>
      <button className="delete-modal__button" onClick={onClose}>
        Cancel
      </button>
    </Modal>
  );
}

export default DeleteModal;
