import clear from "../images/Clear.svg";
import clearNight from "../images/Clear_Night.svg";
/*import cloudy from "../images/Cloudy.svg";
import cloudyNight from "../images/CloudyNight.svg";

import clear from "../images/Clear.svg";
import clear from "../images/Clear.svg";
import clear from "../images/Clear.svg";
import clear from "../images/Clear.svg";
import clear from "../images/Clear.svg";
import clear from "../images/Clear.svg";
import clear from "../images/Clear.svg";
import clear from "../images/Clear.svg";*/

import tShirt from "../images/T-Shirt.svg";

export const weatherImages = {
  clear: {
    day: clear,
    night: clearNight,
  },
};

const apiKey = "17022760e890d61021b86f916ff3bd86";
const latitude = 38.9578752;
const longitude = -77.4144;
export const apiRequest = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;
