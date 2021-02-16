// current date, month, year
let now = new Date();
let days = [
  `Sunday`,
  `Monday`,
  `Tuesday`,
  `Wednesday`,
  `Thursday`,
  `Friday`,
  `Saturday`,
];

let months = [
  `Jan`,
  `Feb`,
  `Mar`,
  `Apr`,
  `May`,
  `Jun`,
  `Jul`,
  `Aug`,
  `Sep`,
  `Oct`,
  `Nov`,
  `Dec`,
];
let weekday = days[now.getDay()];
let month = months[now.getMonth()];
let year = now.getFullYear();

let dateCurrent = document.querySelector("#date");
dateCurrent.innerHTML = `${weekday}, ${month} ${year}`;

// Current data - temperature related

function showCurrentData(response) {
  let temperatureCurrent = document.querySelector("#temperature");
  let cityCurrent = document.querySelector("#city");
  let descriptionCurrent = document.querySelector("#conditions");
  let humidityCurrent = document.querySelector("#humidity");
  let windCurrent = document.querySelector("#wind");
  let feelsLikeCurrent = document.querySelector("#feels");
  let maxTempCurrent = document.querySelector("#max-temp");
  let minTempCurrent = document.querySelector("#min-temp");
  let iconCurrent = document.querySelector("#image");

  celsiusTemperature = response.data.main.temp;

  temperatureCurrent.innerHTML = Math.round(celsiusTemperature);
  cityCurrent.innerHTML = response.data.name;
  descriptionCurrent.innerHTML = response.data.weather[0].description;
  humidityCurrent.innerHTML = `${response.data.main.humidity}%`;
  windCurrent.innerHTML = `${Math.round(response.data.wind.speed)}km/h`;
  feelsLikeCurrent.innerHTML = `${Math.round(response.data.main.feels_like)}°C`;
  maxTempCurrent.innerHTML = `↑${Math.round(response.data.main.temp_max)}°C`;
  minTempCurrent.innerHTML = `↓${Math.round(response.data.main.temp_min)}°C`;
  iconCurrent.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconCurrent.setAttribute("alt", response.data.weather[0].description);
}

//Search Engine
function inputCity(city) {
  city = city.trim();
  city = city.toUpperCase();
  let apiKey = "3cd7c0aa89391f850a62418573a9be62";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showCurrentData);
}

function citySearch(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#searchInput").value;
  inputCity(cityInput);
}

//unit converter
function showTempFahrenheit(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temperature");
  celsius.classList.remove("active");
  fahrenheit.classList.add("active");
  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperature.innerHTML = Math.round(fahrenheitTemperature);
}

function showTempCelsius(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temperature");
  celsius.classList.add("active");
  fahrenheit.classList.remove("active");
  temperature.innerHTML = Math.round(celsiusTemperature);
}

let celsiusTemperature = null;

let form = document.querySelector("#search-form");
form.addEventListener("submit", citySearch);

let fahrenheit = document.querySelector("#unitsF");
fahrenheit.addEventListener("click", showTempFahrenheit);

let celsius = document.querySelector("#unitsC");
celsius.addEventListener("click", showTempCelsius);

inputCity("London");
