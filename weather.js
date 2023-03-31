const apiKey = `4c341f64f008a1651ef2aa003d72fd88`
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Marietta&units=imperial&appid=${apiKey}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const weatherData = {
      city: data.name,
      temperature: Math.round(data.main.temp),
      description: data.weather[0].description,
      icon: data.weather[0].icon,
    };
    displayWeather(weatherData);
  })
  .catch(error => console.log(error));

function displayWeather(data) {
  const weatherDataElement = document.getElementById('weather-data');
  weatherDataElement.innerHTML = `
    <h2>Current Weather in ${data.city}</h2>
    <p>${data.temperature}°F</p>
    <p>${data.description}</p>
    <img src="https://openweathermap.org/img/wn/${data.icon}.png" alt="${data.description}">
  `;
}
