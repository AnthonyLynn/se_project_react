export function getRequest({ latitude, longitude }, APIkey) {
  return `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`;
}

function getResult(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

export function getWeather(request) {
  return fetch(request).then(getResult);
}

export function filterWeatherData(data) {
  const result = {};
  result.city = data.name;
  result.temp = { F: data.main.temp, C: data.main.temp };
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
