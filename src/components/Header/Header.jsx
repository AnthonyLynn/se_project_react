import headerLogo from "../../images/Logo.svg";
import avatarLogo from "../../images/Avatar.svg";
import "./Header.css";

function Header({ onAddClothes, weatherData }) {
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
      <div className="header__menu">
        <button type="button" className="header__menu-btn" />
        <div className="header__user">
          <p className="header__name">Terrence Tegegne</p>
          <img src={avatarLogo} alt="Avatar" className="header__avatar" />
        </div>
        <button
          type="button"
          className="header__clothes-btn"
          onClick={onAddClothes}
        >
          + Add clothes
        </button>
      </div>
    </header>
  );
}

export default Header;
