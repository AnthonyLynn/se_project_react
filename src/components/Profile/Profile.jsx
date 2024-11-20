import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

function Profile({ onAddClothes, onCardClick, items, weatherData }) {
  return (
    <div className="profile">
      <SideBar />
      <section className="profile__clothes">
        <div className="profile__text-container">
          <p className="profile__text">Your items</p>
          <button className={"profile__button"} onClick={onAddClothes}>
            + Add new
          </button>
        </div>
        <ClothesSection
          onCardClick={onCardClick}
          items={items}
          weatherData={weatherData}
        />
      </section>
    </div>
  );
}

export default Profile;
