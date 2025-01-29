import { useEffect } from "react";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import { useForm } from "../../hooks/useForm.js";

function EditProfileModal({ name, activeModal, onEditProfile, onClose }) {
  const { currentUser } = useContext(CurrentUserContext);

  const { values, handleChange, setValues } = useForm({});

  const onSubmit = (evt) => {
    evt.preventDefault();
    onEditProfile(values);
  };

  // Reset values on opening
  useEffect(() => {
    if (activeModal === name)
      setValues({
        name: currentUser.name,
        avatar: currentUser.avatar,
      });
  }, [activeModal]);

  return (
    <ModalWithForm
      name={name}
      onClose={onClose}
      activeModal={activeModal}
      title="Change profile data"
      onSubmit={onSubmit}
    >
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
        Avatar
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
      <button type="submit" className="modal-form__button">
        Save changes
      </button>
    </ModalWithForm>
  );
}

export default EditProfileModal;
