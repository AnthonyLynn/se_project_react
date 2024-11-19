import { useState, useEffect } from "react";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import AddItemModal from "../AddItemModal/AddItemModal";
import ItemModal from "../ItemModal/ItemModal";
import {
  getRequest,
  getWeather,
  filterWeatherData,
} from "../../utils/weatherApi.js";

import { TemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";

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
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [isMobileMenuOpened, setMobileMenuOpened] = useState(false);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  function onOpen(name) {
    setActiveModal(name);
  }

  function onClose() {
    setActiveModal("");
  }

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

  function onAddItem(item) {
    /* TODO: add _id to item */
    item._id = clothingItems.length;
    setClothingItems([item, ...clothingItems]);
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
      <TemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, setCurrentTemperatureUnit }}
      >
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
      </TemperatureUnitContext.Provider>
      <Footer />
      <ItemModal
        name="preview"
        onClose={onClose}
        activeModal={activeModal}
        item={selectedCard}
      />
      <AddItemModal
        activeModal={activeModal}
        onAddItem={onAddItem}
        onClose={onClose}
      />
    </div>
  );
}

export default App;
