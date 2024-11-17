import "./ToggleSwitch.css";

function ToggleSwitch() {
  return (
    <label className="switch">
      <input type="checkbox" className="switch__checkbox" />
      <span className="switch__slider" />
      <p className="switch__char switch__char_active">F</p>
      <p className="switch__char">C</p>
    </label>
  );
}

export default ToggleSwitch;
