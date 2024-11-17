import { useEffect } from "react";

import "./Modal.css";

function Modal({ name, type, onClose, activeModal, children }) {
  useEffect(() => {
    if (activeModal !== type) return;

    const onEscape = (evt) => {
      if (evt.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", onEscape);
    return () => document.removeEventListener("keydown", onEscape);
  }, [activeModal]);

  const onOverlay = (evt) => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`modal modal__type_${type} ${
        activeModal === name && "modal_opened"
      }`}
      onMouseDown={onOverlay}
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
