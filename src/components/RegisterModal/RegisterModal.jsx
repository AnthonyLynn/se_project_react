import { useEffect } from "react";

import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm.js";

function RegisterModal({
  name,
  activeModal,
  onRegister,
  onClose,
  openLoginModal,
}) {
  const { values, handleChange, setValues } = useForm({});

  const onSubmit = (evt) => {
    evt.preventDefault();
    onRegister(values);
  };

  // Reset values on opening
  useEffect(() => {
    if (activeModal === name) setValues({});
  }, [activeModal]);

  return (
    <ModalWithForm
      name={name}
      onClose={onClose}
      activeModal={activeModal}
      title="Sign up"
      onSubmit={onSubmit}
    >
      <label htmlFor="email" className="modal-form__label">
        Email
        <input
          type="email"
          className="modal-form__input"
          id="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={values.email || ""}
          required
        />
      </label>
      <label htmlFor="password" className="modal-form__label">
        Password
        <input
          type="password"
          className="modal-form__input"
          id="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={values.password || ""}
          required
        />
      </label>
      <label htmlFor="name" className="modal-form__label">
        Name
        <input
          type="text"
          className="modal-form__input"
          id="name"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={values.name || ""}
          required
        />
      </label>
      <label htmlFor="avatar" className="modal-form__label">
        Avatar URL
        <input
          type="url"
          className="modal-form__input"
          id="avatar"
          name="avatar"
          placeholder="Avatar URL"
          onChange={handleChange}
          value={values.avatar || ""}
          required
        />
      </label>
      <div>
        <button type="submit" className="modal-form__button">
          Next
        </button>
        <button
          type="button"
          className="modal-form__sign-btn"
          onClick={openLoginModal}
        >
          or Log in
        </button>
      </div>
    </ModalWithForm>
  );
}

export default RegisterModal;
