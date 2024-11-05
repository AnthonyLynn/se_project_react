import { useState, useEffect } from "react";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import {
  getRequest,
  getWeather,
  filterWeatherData,
} from "../../utils/weatherApi.js";

/* TODO: replace once able to find users location and connected to server */
import { coords, APIkey, defaultClothingItems } from "../../utils/constants.js";

import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState({
    city: "",
    type: "",
    timeOfDay: "day",
    condition: "default",
    temp: { F: 999, C: 999 },
  });
  const [activeModal, setActiveModal] = useState("item-display");
  const [selectedCard, setSelectedCard] = useState({});
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [isMobileMenuOpened, setMobileMenuOpened] = useState(false);

  function onOpen(name) {
    setActiveModal(name);
    document.addEventListener("keydown", onEscape);
  }

  function onClose() {
    setActiveModal("");
    document.removeEventListener("keydown", onEscape);
  }

  const onOutsideClick = (evt) => {
    if (evt.currentTarget === evt.target) {
      onClose();
    }
  };

  const onEscape = (evt) => {
    if (evt.key === "Escape") {
      onClose();
    }
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
  };

  function onAddClothes() {
    onOpen("garment-form");
  }

  function onCardClick(item) {
    setActiveModal("preview");
    setSelectedCard(item);
  }

  function toggleMobileMenu() {
    setMobileMenuOpened(!isMobileMenuOpened);
  }

  useEffect(() => {
    const request = getRequest(coords, APIkey);
    getWeather(request)
      .then((data) => {
        const filterData = filterWeatherData(data);
        setWeatherData(filterData);
      })
      .catch(console.error);

    setClothingItems(defaultClothingItems);
  }, []);

  return (
    <div className="page">
      <Header
        onAddClothes={onAddClothes}
        weatherData={weatherData}
        isMenuOpen={isMobileMenuOpened}
        onMenuOpen={toggleMobileMenu}
      />
      <Main
        weatherData={weatherData}
        onCardClick={onCardClick}
        items={clothingItems}
      />
      <Footer />
      <ItemModal
        name="preview"
        onClose={onClose}
        onOutsideClick={onOutsideClick}
        activeModal={activeModal}
        item={selectedCard}
      />
      <ModalWithForm
        name="garment-form"
        onClose={onClose}
        onOutsideClick={onOutsideClick}
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
            placeholder="Name"
            required
          />
        </label>
        <label htmlFor="imageUrl" className="modal-form__label">
          Image
          <input
            type="url"
            className="modal-form__input"
            id="imageUrl"
            placeholder="Image URL"
            required
          />
        </label>
        <fieldset className="modal-form__radio-buttons">
          <legend className="modal-form__legend">
            Select the weather type:
          </legend>
          <label
            htmlFor="hot"
            className="modal-form__label modal-form__label_type_radio"
          >
            <input
              type="radio"
              className="modal-form__radio"
              id="hot"
              name="weather"
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
              required
            />
            Cold
          </label>
        </fieldset>
      </ModalWithForm>
    </div>
  );
}

export default App;
