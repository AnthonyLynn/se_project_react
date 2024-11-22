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
  const [isLoading, setIsLoading] = useState(false);

  function openModal(name) {
    setActiveModal(name);
  }

  function openDeleteModal() {
    openModal("delete");
  }

  function onAddClothes() {
    openModal("garment-form");
  }

  function closeModal() {
    setActiveModal("");
  }

  function onCardClick(item) {
    setActiveModal("preview");
    setSelectedCard(item);
  }

  function toggleMobileMenu() {
    setMobileMenuOpened(!isMobileMenuOpened);
  }

  function onAddItem(item) {
    setIsLoading(true);
    postItem(item)
      .then((data) => {
        setClothingItems([data, ...clothingItems]);
        closeModal();
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }

  function onDeleteCard() {
    setIsLoading(true);
    deleteItem(selectedCard._id)
      .then(() => {
        setClothingItems(
          clothingItems.filter((clothingItem) => {
            return clothingItem !== selectedCard;
          })
        );
        closeModal();
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }

  // Close modals on Esc key
  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (evt) => {
      if (evt.key == "Escape") closeModal();
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  // Get weather
  useEffect(() => {
    setIsLoading(true);
    const request = getRequest(coords, APIkey);
    getWeather(request)
      .then((data) => {
        const filterData = filterWeatherData(data);
        setWeatherData(filterData);
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, []);

  // Get Items
  useEffect(() => {
    setIsLoading(true);
    getItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
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
        isLoading={isLoading}
      />
      <DeleteModal
        name="delete"
        activeModal={activeModal}
        onAddItem={onAddItem}
        onClose={closeModal}
        onDelete={onDeleteCard}
        isLoading={isLoading}
      />
    </div>
  );
}

export default App;
