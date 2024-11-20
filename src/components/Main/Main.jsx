import WeatherCard from "../WeatherCard/WeatherCard";
import Profile from "../Profile/Profile";

import "./Main.css";

function Main({ onCardClick, items, isProfileOpen }) {
  return (
    <main className="main">
      <WeatherCard isOpen={isProfileOpen} />
      <Profile onCardClick={onCardClick} items={items} />
    </main>
  );
}

export default Main;
