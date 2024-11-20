import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

import "./Profile.css";

function Profile({ onCardClick, items }) {
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection onCardClick={onCardClick} items={items} />
    </div>
  );
}

export default Profile;
