import React from "react";

import { TemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";

import "./ToggleSwitch.css";

function ToggleSwitch() {
  const { currentTemperatureUnit, setCurrentTemperatureUnit } =
    React.useContext(TemperatureUnitContext);

  const handleChange = () =>
    setCurrentTemperatureUnit(currentTemperatureUnit === "C" ? "F" : "C");

  return (
    <label className="switch">
      <input
        type="checkbox"
        className="switch__checkbox"
        onChange={handleChange}
        checked={currentTemperatureUnit === "C"}
      />
      <p
        className={`switch__char ${
          currentTemperatureUnit === "F" && "switch__char_active"
        }`}
      >
        F
      </p>
      <p
        className={`switch__char ${
          currentTemperatureUnit === "C" && "switch__char_active"
        }`}
      >
        C
      </p>
    </label>
  );
}

export default ToggleSwitch;
