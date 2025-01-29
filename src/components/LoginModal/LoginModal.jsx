import { useEffect } from "react";

import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm.js";

function LoginModal({
  name,
  activeModal,
  onLogin,
  onClose,
  openRegisterModal,
}) {
  const { values, handleChange, setValues } = useForm({});

  const onSubmit = (evt) => {
    evt.preventDefault();
    onLogin(values);
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
      title="Log in"
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
      <div>
        <button type="submit" className="modal-form__button">
          Log in
        </button>
        <button
          type="button"
          className="modal-form__sign-btn"
          onClick={openRegisterModal}
        >
          or Register
        </button>
      </div>
    </ModalWithForm>
  );
}

export default LoginModal;
