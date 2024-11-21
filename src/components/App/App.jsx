import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import AddItemModal from "../AddItemModal/AddItemModal";
import ItemModal from "../ItemModal/ItemModal";
import DeleteModal from "../DeleteModal/DeleteModal";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";

import {
  getRequest,
  getWeather,
  filterWeatherData,
} from "../../utils/weatherApi.js";
import { getItems, postItem, deleteItem } from "../../utils/api.js";

import { TemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";

/* TODO: replace once able to find users location and connected to server */
import { coords, APIkey } from "../../utils/constants.js";

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
  const [clothingItems, setClothingItems] = useState([]);
  const [isMobileMenuOpened, setMobileMenuOpened] = useState(false);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  function openModal(name) {
    setActiveModal(name);
  }

  function closeModal() {
    setActiveModal("");
  }

  function onAddClothes() {
    openModal("garment-form");
  }

  function onCardClick(item) {
    setActiveModal("preview");
    setSelectedCard(item);
  }

  function toggleMobileMenu() {
    setMobileMenuOpened(!isMobileMenuOpened);
  }

  function onAddItem(item) {
    postItem(item)
      .then((data) => {
        console.log(data);
        setClothingItems([...clothingItems, data]);
      })
      .catch(console.error);
  }

  function openDeleteModal() {
    setActiveModal("delete");
  }

  function onDeleteCard() {
    deleteItem(selectedCard._id);
    setClothingItems(
      clothingItems.filter((clothingItem) => {
        return clothingItem !== selectedCard;
      })
    );
    closeModal();
  }

  useEffect(() => {
    const request = getRequest(coords, APIkey);
    getWeather(request)
      .then((data) => {
        const filterData = filterWeatherData(data);
        setWeatherData(filterData);
      })
      .catch(console.error);

    getItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="page">
      <TemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, setCurrentTemperatureUnit }}
      >
        <Header
          onAddClothes={onAddClothes}
          isMenuOpen={isMobileMenuOpened}
          onMenuOpen={toggleMobileMenu}
          weatherData={weatherData}
        />

        <Routes>
          <Route
            path="/"
            element={
              <Main
                onCardClick={onCardClick}
                items={clothingItems}
                weatherData={weatherData}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile
                onAddClothes={onAddClothes}
                onCardClick={onCardClick}
                items={clothingItems}
                weatherData={weatherData}
              />
            }
          />
        </Routes>
      </TemperatureUnitContext.Provider>

      <Footer />

      <ItemModal
        name="preview"
        onClose={closeModal}
        activeModal={activeModal}
        item={selectedCard}
        openDeleteModal={openDeleteModal}
      />
      <AddItemModal
        name="garment-form"
        activeModal={activeModal}
        onAddItem={onAddItem}
        onClose={closeModal}
      />
      <DeleteModal
        name="delete"
        activeModal={activeModal}
        onAddItem={onAddItem}
        onClose={closeModal}
        onDelete={onDeleteCard}
      />
    </div>
  );
}

export default App;
