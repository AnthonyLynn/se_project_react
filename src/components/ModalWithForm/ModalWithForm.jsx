import "./ModalWithForm.css";

function ModalWithForm(props) {
  return (
    <div className={`modal modal_type_${props.name}`}>
      <div className="modal__content">
        <h2 className="modal__title">{props.title}</h2>
        <button
          type="button"
          className="modal__close-btn"
          onClick={props.onClose}
        />
        <form name={props.name} className="modal__form" id={props.name}>
          {props.children}
        </form>
        <button type="submit" className="modal__button" form={props.name}>
          {props.buttonText}
        </button>
      </div>
    </div>
  );
}

export default ModalWithForm;
