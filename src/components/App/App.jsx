import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import AddItemModal from "../AddItemModal/AddItemModal";
import ItemModal from "../ItemModal/ItemModal";
import DeleteModal from "../DeleteModal/DeleteModal";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import {
  getRequest,
  getWeather,
  filterWeatherData,
} from "../../utils/weatherApi.js";
import {
  getItems,
  postItem,
  deleteItem,
  likeItem,
  dislikeItem,
} from "../../utils/api.js";
import { signup, signin, getUserInfo, editProfile } from "../../utils/auth.js";
import { getToken, setToken, removeToken } from "../../utils/token.js";

import { TemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

/* TODO: replace once able to find users location and connected to server */
import { coords, APIkey } from "../../utils/constants.js";

import "./App.css";

function App() {
  const navigate = useNavigate();

  const [weatherData, setWeatherData] = useState({
    city: "",
    type: "",
    timeOfDay: "day",
    condition: "default",
    temp: { F: 999, C: 999 },
  });
  const [currentUser, setCurrentUser] = useState({
    username: "",
    email: "",
    avatar: "",
    _id: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [clothingItems, setClothingItems] = useState([]);
  const [isMobileMenuOpened, setMobileMenuOpened] = useState(false);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function getOpenModalFunction(modal) {
    return () => {
      setActiveModal(modal);
    };
  }

  const openDeleteModal = getOpenModalFunction("delete");
  const openRegisterModal = getOpenModalFunction("register");
  const openLoginModal = getOpenModalFunction("login");
  const openClothesModal = getOpenModalFunction("garment-form");
  const openEditProfileModal = getOpenModalFunction("edit-profile");
  const closeModal = getOpenModalFunction("");

  function onCardClick(item) {
    setSelectedCard(item);
    setActiveModal("preview");
  }

  function toggleMobileMenu() {
    setMobileMenuOpened(!isMobileMenuOpened);
  }

  function handleSubmit(request) {
    setIsLoading(true);
    request()
      .then(closeModal)
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }

  function onAddItem(item) {
    const token = getToken();

    if (!token) {
      return;
    }

    const makeRequest = () => {
      return postItem(item, token).then(({ data }) => {
        setClothingItems([data, ...clothingItems]);
        console.log(data);
      });
    };

    handleSubmit(makeRequest);
  }

  function onDeleteItem() {
    const token = getToken();

    if (!token) {
      return;
    }

    const deleteRequest = () => {
      return deleteItem(selectedCard._id, token).then(() => {
        setClothingItems(
          clothingItems.filter((clothingItem) => {
            return clothingItem !== selectedCard;
          })
        );
      });
    };

    handleSubmit(deleteRequest);
  }

  function onRegister(data) {
    const registerRequest = () => {
      return signup(data).then((data) => {
        if (data.token) {
          setToken(data.token);
          setCurrentUser(data.user);
          setIsLoggedIn(true);
          navigate("/profile");
          closeModal();
        } else {
          console.error("No token was found");
        }
      });
    };

    handleSubmit(registerRequest);
  }

  function onLogin(data) {
    const loginRequest = () => {
      return signin(data).then((data) => {
        if (data.token) {
          setToken(data.token);
          setCurrentUser(data.user);
          setIsLoggedIn(true);
          navigate("/profile");
          closeModal();
        } else {
          console.error("No token was found");
        }
      });
    };

    handleSubmit(loginRequest);
  }

  function onLogOut() {
    removeToken();
    setIsLoggedIn(false);
    setCurrentUser({
      username: "",
      email: "",
      avatar: "",
      _id: "",
    });
    navigate("/");
  }

  function onEditProfile(data) {
    const token = getToken();

    if (!token) {
      return;
    }

    const editProfileRequest = () => {
      return editProfile(data, token).then(({ data }) => {
        closeModal();
        setCurrentUser(data);
      });
    };

    handleSubmit(editProfileRequest);
  }

  const onCardLike = ({ _id }, isLiked) => {
    const token = getToken();

    if (!token) {
      return;
    }

    (!isLiked ? likeItem : dislikeItem)(_id, token)
      .then(({ data }) => {
        setClothingItems((cards) =>
          cards.map((item) => (item._id === _id ? data : item))
        );
      })
      .catch(console.error);
  };

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
    const request = getRequest(coords, APIkey);
    getWeather(request)
      .then((weather) => {
        const filterData = filterWeatherData(weather);
        setWeatherData(filterData);
      })
      .catch(console.error);
  }, []);

  // Get Items
  useEffect(() => {
    getItems()
      .then(({ data }) => {
        setClothingItems(data);
      })
      .catch(console.error);
  }, []);

  // Check if there's a token
  useEffect(() => {
    const token = getToken();

    if (!token) {
      return;
    }

    getUserInfo(token)
      .then(({ data }) => {
        setIsLoggedIn(true);
        setCurrentUser(data);
        navigate("/profile");
      })
      .catch(console.error);
  }, []);

  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
      <div className="page">
        <TemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, setCurrentTemperatureUnit }}
        >
          <Header
            onAddClothes={openClothesModal}
            isMenuOpen={isMobileMenuOpened}
            onMenuOpen={toggleMobileMenu}
            weatherData={weatherData}
            isLoggedIn={isLoggedIn}
            openRegisterModal={openRegisterModal}
            openLoginModal={openLoginModal}
          />

          <Routes>
            <Route
              path="/"
              element={
                <Main
                  onCardClick={onCardClick}
                  items={clothingItems}
                  weatherData={weatherData}
                  onCardLike={onCardLike}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Profile
                    onAddClothes={openClothesModal}
                    onCardClick={onCardClick}
                    onCardLike={onCardLike}
                    items={clothingItems}
                    weatherData={weatherData}
                    openEditProfileModal={openEditProfileModal}
                    onLogOut={onLogOut}
                  />
                </ProtectedRoute>
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
          onDelete={onDeleteItem}
          isLoading={isLoading}
        />
        <RegisterModal
          name="register"
          activeModal={activeModal}
          onRegister={onRegister}
          onClose={closeModal}
          openLoginModal={openLoginModal}
        />
        <LoginModal
          name="login"
          activeModal={activeModal}
          onLogin={onLogin}
          onClose={closeModal}
          openRegisterModal={openRegisterModal}
        />
        <EditProfileModal
          name="edit-profile"
          activeModal={activeModal}
          onEditProfile={onEditProfile}
          onClose={closeModal}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
