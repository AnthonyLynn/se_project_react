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

export const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];

export const coords = {
  latitude: 36.2048,
  longitude: 138.2529,
};

export const APIkey = "17022760e890d61021b86f916ff3bd86";
