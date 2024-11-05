import Modal from "../Modal/Modal";

import "./ModalWithForm.css";

function ModalWithForm({
  name,
  onClose,
  onOutsideClick,
  activeModal,
  title,
  buttonText,
  onSubmit,
  children,
}) {
  return (
    <Modal
      name={name}
      type="form"
      onClose={onClose}
      onOutsideClick={onOutsideClick}
      activeModal={activeModal}
    >
      <h2 className="modal-form__title">{title}</h2>
      <form
        name={name}
        className="modal-form__form"
        id={name}
        onSubmit={onSubmit}
      >
        {children}
      </form>
      <button type="submit" className="modal-form__button" form={name}>
        {buttonText}
      </button>
    </Modal>
  );
}

export default ModalWithForm;
