const API_KEY = "f027617ee3db47933d0cf388bd52032b";

const inputEl = document.getElementById("input");

const buttonEl = document.getElementById("button");

const weatherDataEl = document.getElementById("weather-data");

const weatherIcon = document.querySelector(".icon");

const getWeatherData = async (inputValue) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${API_KEY}&units=metric`
    );
    if (!response.ok) {
      throw new Error("Network response was not okay");
    }
    const data = await response.json();
    console.log(data);
    const temperature = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    weatherDataEl.querySelector(
      ".temperature"
    ).textContent = `${temperature}°c`;
    weatherDataEl.querySelector(".city").innerHTML = data.name;
    weatherDataEl.querySelector(".discription").innerHTML =
      data.weather[0].description;
    weatherDataEl.querySelector(".humidity").textContent = `${humidity}%`;
    weatherDataEl.querySelector(".wind").textContent = `${windSpeed}km/h`;
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "./images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "./images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "./images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "./images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "./images/mist.png";
    }
  } catch (error) {
    console.log("Enter a valid city Name");
  }
};

buttonEl.addEventListener("click", () => {
  const inputValue = inputEl.value;
  console.log(inputValue);
  getWeatherData(inputValue);
});
