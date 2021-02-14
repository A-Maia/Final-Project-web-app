function showCurrentData(response) {
  console.log(response.data);
  let temperatureCurrent = document.querySelector("#temperature");
  let cityCurrent = document.querySelector("#city");
  let descriptionCurrent = document.querySelector("#conditions");
  let humidityCurrent = document.querySelector("#humidity");
  let windCurrent = document.querySelector("#wind");
  let maxTempCurrent = document.querySelector("#max-temp");
  let minTempCurrent = document.querySelector("#min-temp");

  temperatureCurrent.innerHTML = Math.round(response.data.main.temp);
  cityCurrent.innerHTML = response.data.name;
  descriptionCurrent.innerHTML = response.data.weather[0].description;
  humidityCurrent.innerHTML = `${response.data.main.humidity}%`;
  windCurrent.innerHTML = `${Math.round(response.data.wind.speed)}km/h`;
  maxTempCurrent.innerHTML = `↑${Math.round(response.data.main.temp_max)}°C`;
  minTempCurrent.innerHTML = `↓${Math.round(response.data.main.temp_min)}°C`;
}

let apiKey = "3cd7c0aa89391f850a62418573a9be62";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(showCurrentData);

let cityCurrent = response.data.name;
let city = document.querySelector("#city");
city.innerHTML = `${cityCurrent}`;

let weatherCurrent = response.data.weather[0].description;
let weather = document.querySelector("#weather");
weather.innerHTML = `${weatherCurrent}`;

let temperatureCurrent = Math.round(response.data.main.temp);
let temperature = document.querySelector("#temp");
temperature.innerHTML = `${temperatureCurrent}`;

let humidityCurrent = response.data.main.humidity;
let humidity = document.querySelector("#hum");
humidity.innerHTML = `Humidity:${humidityCurrent}%`;

let windCurrentspeed = response.data.wind.speed;
let wind = document.querySelector("#wind");
wind.innerHTML = `Wind:${windCurrentspeed} m/s`;

let tempMaxCurrent = Math.round(response.data.main.temp_max);
let tempMinCurrent = Math.round(response.data.main.temp_min);
let tempMaxMin = document.querySelector("#max-min");
tempMaxMin.innerHTML = `${tempMaxCurrent}°|${tempMinCurrent}°`;
