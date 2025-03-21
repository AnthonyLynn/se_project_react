import { request } from "./api.js";

export function getRequest({ latitude, longitude }, APIkey) {
  return `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`;
}

export function getWeather(requestWeather) {
  return request(requestWeather);
}

export function filterWeatherData(data) {
  const result = {};
  result.city = data.name;
  result.temp = {
    F: Math.round(data.main.temp),
    C: Math.round(((data.main.temp - 32) * 5) / 9),
  };
  result.type = getWeatherHeat(result.temp.F);
  result.timeOfDay = getTimeOfDay(data.dt, data.sys);
  result.condition = data.weather[0].main.toLowerCase();

  return result;
}

function getTimeOfDay(time, { sunrise, sunset }) {
  return sunrise < time && time < sunset ? "day" : "night";
}

function getWeatherHeat(temperature) {
  if (temperature >= 86) {
    return "hot";
  } else if (temperature >= 66) {
    return "warm";
  } else {
    return "cold";
  }
}
