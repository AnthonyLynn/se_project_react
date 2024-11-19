import React from "react";

import { TemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";

import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

import headerLogo from "../../images/Logo.svg";
import avatarLogo from "../../images/Avatar.svg";
import "./Header.css";

function Header({ onAddClothes, weatherData, isMenuOpen, onMenuOpen }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__info">
        <img src={headerLogo} alt="Logo" className="header__logo" />
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
        <div
          className={`header__user ${
            !isMenuOpen ? "header__user_type_menu-closed" : ""
          }`}
        >
          <p className="header__name">Terrence Tegegne</p>
          <img src={avatarLogo} alt="Avatar" className="header__avatar" />
        </div>
        <button
          type="button"
          className={`header__clothes-btn ${
            !isMenuOpen ? "header__clothes-btn_type_menu-closed" : ""
          }`}
          onClick={onAddClothes}
        >
          + Add clothes
        </button>
        <ToggleSwitch />
      </div>
    </header>
  );
}

export default Header;
