import { useState, useEffect } from "react";

import ModalWithForm from "../ModalWithForm/ModalWithForm";

function AddItemModal({ name: modalName, activeModal, onAddItem, onClose }) {
  /* 
    Is there a better way to do this so that the the same pattern isn't repeaated 3 times over?
    Tried doing something like this but it didn't work:

    const inputFields = {
      name: "",
      link: "",
      weather: "",
    };

    const [inputs, setInputs] = useState(inputFields);

    useEffect(() => {
      if (activeModal !== "garment-form") return;

      setInputs(inputFields);
    }, [activeModal]);

    const onChange = (evt) => {
      setInputs({ ...inputs, [evt.target.name]: evt.target.value });
      console.log(inputs);
    };
  */

  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [weather, setWeather] = useState("");

  const onNameChange = (evt) => setName(evt.target.value);
  const onLinkChange = (evt) => setLink(evt.target.value);
  const onWeatherChange = (evt) => setWeather(evt.target.value);

  function resetInputs() {
    setName("");
    setLink("");
    setWeather("");
  }

  useEffect(() => {
    if (activeModal !== modalName) return;

    resetInputs();
  }, [activeModal]);

  const onSubmit = (evt) => {
    evt.preventDefault();
    onAddItem({ name: name, link: link, weather: weather });
  };

  return (
    <ModalWithForm
      name={modalName}
      onClose={onClose}
      activeModal={activeModal}
      title="New garment"
      buttonText="Add garment"
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
          onChange={onNameChange}
          value={name}
          required
        />
      </label>
      <label htmlFor="imageUrl" className="modal-form__label">
        Image
        <input
          type="url"
          className="modal-form__input"
          id="imageUrl"
          name="link"
          placeholder="Image URL"
          onChange={onLinkChange}
          value={link}
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
            onChange={onWeatherChange}
            checked={weather === "hot"}
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
            onChange={onWeatherChange}
            checked={weather === "warm"}
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
            onChange={onWeatherChange}
            checked={weather === "cold"}
            required
          />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;
