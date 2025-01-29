import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

import "./SideBar.css";

function SideBar({ onLogOut, openEditProfileModal }) {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <section className="side-bar">
      <div className="side-bar__info">
        <div className="side-bar__avatar">
          <img
            src={currentUser.avatar}
            alt="Avatar"
            className="side-bar__avatar-image"
          />
          <p className="side-bar__avatar-char">
            {currentUser.name[0].toUpperCase()}
          </p>
        </div>
        <p className="side-bar__username">{currentUser.name}</p>
      </div>
      <button className="side-bar__button" onClick={openEditProfileModal}>
        Change profile data
      </button>
      <button className="side-bar__button" onClick={onLogOut}>
        Log out
      </button>
    </section>
  );
}

export default SideBar;
