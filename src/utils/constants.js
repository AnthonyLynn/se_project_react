import clear from "../images/Clear.svg";
import clearNight from "../images/Clear_Night.svg";
import cloudy from "../images/Cloudy.svg";
import cloudyNight from "../images/Cloudy_Night.svg";
import snowy from "../images/Snowy.svg";
import snowyNight from "../images/Snowy_Night.svg";
import rainy from "../images/Rainy.svg";
import rainyNight from "../images/Rainy_Night.svg";
import thunder from "../images/Thunder.svg";
import thunderNight from "../images/Thunder_Night.svg";
import foggy from "../images/Foggy.svg";
import foggyNight from "../images/Foggy_Night.svg";

export const weatherImages = {
  default: {
    day: foggy,
    night: foggyNight,
  },
  clear: {
    day: clear,
    night: clearNight,
  },
  clouds: {
    day: cloudy,
    night: cloudyNight,
  },
  snow: {
    day: snowy,
    night: snowyNight,
  },
  fog: {
    day: foggy,
    night: foggyNight,
  },
  thunderstorm: {
    day: thunder,
    night: thunderNight,
  },
  rain: {
    day: rainy,
    night: rainyNight,
  },
};

export const coords = {
  latitude: 36.2048,
  longitude: 138.2529,
};

export const APIkey = "17022760e890d61021b86f916ff3bd86";

export const baseUrl = "http://localhost:3001";
export const header = { "Content-Type": "application/json" };
