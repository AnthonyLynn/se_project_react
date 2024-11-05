import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";

/* TODO: Get rid of */
import tShirt from "../../images/T-Shirt.svg";

import "./App.css";

function onClose(evt) {}

function App() {
  return (
    <div className="page">
      <Header />
      <Main temp={75} weather={"clear"} timeOfDay={"day"} />
      <Footer />

      <ItemModal
        title="T-Shirt"
        weather="hot"
        imageUrl={tShirt}
        onClose={onClose}
      />
      {/*
      <ModalWithForm
        name="garment"
        title="New garment"
        buttonText="Add garment"
        onClose={onClose}
      >
        <label htmlFor="name" className="modal__label">
          Name
          <input
            type="text"
            className="modal__input"
            id="name"
            placeholder="Name"
          />
        </label>
        <label htmlFor="imageUrl" className="modal__label">
          Image
          <input
            type="url"
            className="modal__input"
            id="imageUrl"
            placeholder="Image URL"
          />
        </label>
        <fieldset className="modal__radio-buttons">
          <legend className="modal__legend">Select the weather type:</legend>
          <label htmlFor="hot" className="modal__label modal__label_type_radio">
            <input
              type="radio"
              className="modal__radio"
              id="hot"
              name="weather"
            />
            Hot
          </label>
          <label
            htmlFor="warm"
            className="modal__label modal__label_type_radio"
          >
            <input
              type="radio"
              className="modal__radio"
              id="warm"
              name="weather"
            />
            Warm
          </label>
          <label
            htmlFor="cold"
            className="modal__label modal__label_type_radio"
          >
            <input
              type="radio"
              className="modal__radio"
              id="cold"
              name="weather"
            />
            Cold
          </label>
        </fieldset>
      </ModalWithForm>
      */}
    </div>
  );
}

export default App;
