import Modal from "../Modal/Modal";

import "./ModalWithForm.css";

function ModalWithForm({
  name,
  onClose,
  activeModal,
  title,
  onSubmit,
  children,
}) {
  return (
    <Modal name={name} type="form" onClose={onClose} activeModal={activeModal}>
      <h2 className="modal-form__title">{title}</h2>
      <form name={name} className="modal-form__form" onSubmit={onSubmit}>
        {children}
      </form>
    </Modal>
  );
}

export default ModalWithForm;
