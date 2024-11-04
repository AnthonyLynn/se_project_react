import headerLogo from "../../images/Logo.svg";
import avatarLogo from "../../images/Avatar.svg";
import "./Header.css";

function Header() {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__info">
        <img src={headerLogo} alt="Logo" className="header__logo" />
        <p className="header__date-location">{currentDate}</p>{" "}
        {/* TODO: add location */}
      </div>
      <div className="header__menu">
        <button className="header__menu-btn" />
        <div className="header__user">
          <p className="header__name">Terrence Tegegne</p>
          <img src={avatarLogo} alt="Avatar" className="header__avatar" />
        </div>
        <button className="header__clothes-btn">+ Add clothes</button>{" "}
        {/* TODO: add button link to ModalWithForm openning */}
      </div>
    </header>
  );
}

export default Header;
