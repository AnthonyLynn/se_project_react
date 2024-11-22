import { useEffect } from "react";

import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm.js";

function AddItemModal({ name, activeModal, onAddItem, onClose, isLoading }) {
  const { values, handleChange, setValues } = useForm({});

  const onSubmit = (evt) => {
    evt.preventDefault();
    onAddItem(values);
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
      title="New garment"
      buttonText={isLoading ? "Adding item..." : "Add garment"}
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
          required
        />
      </label>
      <label htmlFor="imageUrl" className="modal-form__label">
        Image
        <input
          type="url"
          className="modal-form__input"
          id="imageUrl"
          name="imageUrl"
          placeholder="Image URL"
          onChange={handleChange}
          required
        />
      </label>
      <fieldset className="modal-form__radio-buttons">
        <legend className="modal-form__legend">Select the weather type:</legend>
        <label
          htmlFor="hot"
          className="modal-form__label modal-form__label_type_radio"
        >
          <input
            type="radio"
            className="modal-form__radio"
            id="hot"
            name="weather"
            value="hot"
            onChange={handleChange}
            checked={values.weather === "hot"}
            required
          />
          Hot
        </label>
        <label
          htmlFor="warm"
          className="modal-form__label modal-form__label_type_radio"
        >
          <input
            type="radio"
            className="modal-form__radio"
            id="warm"
            name="weather"
            value="warm"
            onChange={handleChange}
            checked={values.weather === "warm"}
            required
          />
          Warm
        </label>
        <label
          htmlFor="cold"
          className="modal-form__label modal-form__label_type_radio"
        >
          <input
            type="radio"
            className="modal-form__radio"
            id="cold"
            name="weather"
            value="cold"
            onChange={handleChange}
            checked={values.weather === "cold"}
            required
          />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;
