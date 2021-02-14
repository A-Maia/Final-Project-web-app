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
  let maxTempCurrent = document.querySelector("#max-temp");
  let minTempCurrent = document.querySelector("#min-temp");
  let iconCurrent = document.querySelector("#image");

  temperatureCurrent.innerHTML = Math.round(response.data.main.temp);
  cityCurrent.innerHTML = response.data.name;
  descriptionCurrent.innerHTML = response.data.weather[0].description;
  humidityCurrent.innerHTML = `${response.data.main.humidity}%`;
  windCurrent.innerHTML = `${Math.round(response.data.wind.speed)}km/h`;
  maxTempCurrent.innerHTML = `↑${Math.round(response.data.main.temp_max)}°C`;
  minTempCurrent.innerHTML = `↓${Math.round(response.data.main.temp_min)}°C`;
  iconCurrent.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconCurrent.setAttribute("alt", response.data.weather[0].description);
}

let apiKey = "3cd7c0aa89391f850a62418573a9be62";
let city = "London";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(showCurrentData);
