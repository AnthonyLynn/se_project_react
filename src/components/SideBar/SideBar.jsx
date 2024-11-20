import avatar from "../../images/Avatar.svg";

import "./SideBar.css";

function SideBar() {
  return (
    <section className="side-bar">
      <div className="side-bar__info">
        <img src={avatar} alt="Avatar" className="side-bar__avatar" />
        <p className="side-bar__username">Terrence Tegegne</p>
      </div>
    </section>
  );
}

export default SideBar;
