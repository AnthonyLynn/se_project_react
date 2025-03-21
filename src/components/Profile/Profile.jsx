import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

function Profile({
  onAddClothes,
  onCardClick,
  onCardLike,
  items,
  weatherData,
  openEditProfileModal,
  onLogOut,
}) {
  return (
    <div className="profile">
      <SideBar
        openEditProfileModal={openEditProfileModal}
        onLogOut={onLogOut}
      />
      <section className="profile__clothes">
        <div className="profile__text-container">
          <p className="profile__text">Your items</p>
          <button className={"profile__button"} onClick={onAddClothes}>
            + Add new
          </button>
        </div>
        <ClothesSection
          onCardClick={onCardClick}
          onCardLike={onCardLike}
          items={items}
          weatherData={weatherData}
          shouldFilterWeather={false}
          shouldFilterOwner={true}
        />
      </section>
    </div>
  );
}

export default Profile;
