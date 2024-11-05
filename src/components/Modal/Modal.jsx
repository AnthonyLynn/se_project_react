import "./Modal.css";

function Modal({ name, type, onClose, onOutsideClick, activeModal, children }) {
  return (
    <div
      className={`modal ${activeModal === name && "modal_opened"}`}
      onMouseDown={onOutsideClick}
    >
      <div className={`modal__content modal__content_type_${type}`}>
        <button
          type="button"
          className={`modal__close-btn modal__close-btn_type_${type}`}
          onClick={onClose}
        />
        {children}
      </div>
    </div>
  );
}

export default Modal;
