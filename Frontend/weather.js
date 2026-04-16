const inputBox = document.querySelector(".search-bar input");
const searchButton = document.querySelector(".search-bar button");
const weatherIcon = document.querySelector(".weather-icon");
const weather = document.querySelector(".weather");
const errorMessage = document.querySelector(".error");

import { getFromCache, saveToCache } from "./cache.js";

async function CheckWeather(city) {
  try {
    // 🔍 1. Revisar caché primero
    const cachedData = getFromCache(city);
    if (cachedData) {
      console.log("📦 Usando datos en caché");
      UpdateWheatherUI(cachedData);
      return;
    }

    // 🌐 2. Si no hay caché → llamar API
        
    const apiURL = `http://localhost:3000/weather?city=${encodeURIComponent(city)}`;

    const response = await fetch(apiURL);

    if (!response.ok) {
      throw new Error("Ciudad no encontrada");
    }

    const data = await response.json();

    // 💾 3. Guardar en caché
    saveToCache(city, data);

    UpdateWheatherUI(data);

  } catch (error) {
    console.error(error.message);
    weather.style.display = "none";
    errorMessage.style.display = "block";
  }
}



function UpdateWheatherUI(data)
{
    document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}`;
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
    document.querySelector(".wind").innerHTML = `${data.wind.speed}km/h`;

    const weatherIcons = {
        Clear: "../assets/images/clear.png",
        Snow: "../assets/images/snow.png",
        Rain : "../assets/images/rain.png",
        Clouds: "../assets/images/clouds.png"
    }

    weatherIcon.src = weatherIcons[data.weather[0].main] || "../assets/images/rain.png";
    weather.style.display = "block";
    errorMessage.style.display = "none";
}

searchButton.addEventListener("click", () => {
    CheckWeather(inputBox.value);
})

