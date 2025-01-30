import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

import headerLogo from "../../images/Logo.svg";
import "./Header.css";
import { Link, Outlet } from "react-router-dom";

function Header({
  onAddClothes,
  isMenuOpen,
  onMenuOpen,
  weatherData,
  isLoggedIn,
  openRegisterModal,
  openLoginModal,
}) {
  const { currentUser } = useContext(CurrentUserContext);

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__info">
        <Link to="/" className="header__logo-link">
          <img src={headerLogo} alt="Logo" className="header__logo" />
        </Link>
        <p className="header__date-location">{`${currentDate}, ${weatherData.city}`}</p>
      </div>
      <div
        className={`header__menu ${isMenuOpen ? "header__menu_opened" : ""}`}
      >
        <button
          type="button"
          className={`header__menu-btn ${
            isMenuOpen ? "header__menu-btn_opened" : ""
          }`}
          onClick={onMenuOpen}
        />
        {isLoggedIn ? (
          <Link
            to="/profile"
            className={`header__user ${
              !isMenuOpen ? "header__user_type_menu-closed" : ""
            }`}
          >
            <p className="header__name">{currentUser.name}</p>
            <div className="header__avatar">
              {currentUser.avatar ? (
                <img
                  src={currentUser.avatar}
                  alt="Avatar"
                  className="header__avatar-image"
                />
              ) : (
                <p className="header__avatar-char">
                  {currentUser.name[0].toUpperCase()}
                </p>
              )}
            </div>
          </Link>
        ) : (
          <button className={"header__signup-btn"} onClick={openLoginModal}>
            Log In
          </button>
        )}
        {isLoggedIn ? (
          <button
            type="button"
            className={`header__clothes-btn ${
              !isMenuOpen ? "header__clothes-btn_type_menu-closed" : ""
            }`}
            onClick={onAddClothes}
          >
            + Add clothes
          </button>
        ) : (
          <button className={"header__signin-btn"} onClick={openRegisterModal}>
            Sign Up
          </button>
        )}
        <ToggleSwitch />
      </div>
      <Outlet />
    </header>
  );
}

export default Header;
