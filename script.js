// API - 62f24f38c2764275bec14014232407

const cl = console.log;

let weatherCondition 
let weatherCondition_img
let locationName
let temp_c 
let temp_f
let tempfeels_c1
let tempfeels_f 
let humidity 

//Set default
let locationUserRequest = 'Dadiangas'
let API_CallURL = `http://api.weatherapi.com/v1/current.json?key=62f24f38c2764275bec14014232407&q=Dadiangas&aqi=no`

function fetchWeather() {
  fetch(API_CallURL, {
    mode: 'cors'
    }).then(function(response) {
      // Successful response :)
      cl('Successful')
      return response.json();
    }).then(function(response) {
      cl(response);
      weatherCondition = response.current.condition.text
      weatherCondition_img = response.current.condition.icon
      locationName = response.location
      temp_c = response.current.temp_c
      temp_f = response.current.temp_f
      tempfeels_c = response.current.feelslike_c
      tempfeels_f = response.current.feelslike_f
      humidity = response.current.humidity
    render()
  
    }).catch(function(err) {
      cl('Error');
    });
  cl('fn-fetchWeather')
}



function render() {
  content.innerHTML = ""
  const weatherCondition_div = document.createElement('div')
  const weatherCondition_img_container = document.createElement('img')
  const location_div = document.createElement('div')
  const temp_div = document.createElement('div')
  const tempfeels_div = document.createElement('div')
  const humidity_div = document.createElement('div')

  weatherCondition_div.textContent = weatherCondition
  weatherCondition_img_container.src = weatherCondition_img
  location_div.textContent = `${locationName.name}, ${locationName.region}, ${locationName.country}`
  temp_div.textContent = `${temp_c} °C` 
  tempfeels_div.textContent = `Feels like: ${tempfeels_c} °C`  
  humidity_div.textContent = `Humidity: ${humidity}%` 

  content.appendChild(weatherCondition_div)
  content.appendChild(weatherCondition_img_container)
  content.appendChild(location_div)
  content.appendChild(temp_div)
  content.appendChild(tempfeels_div)
  content.appendChild(humidity_div)
  cl('fn-render')
}

function showlocationrequest() {
  locationUserRequest = searchbar.value
  API_CallURL = `http://api.weatherapi.com/v1/current.json?key=62f24f38c2764275bec14014232407&q=${locationUserRequest}&aqi=no`
  searchbar.value = ""
  fetchWeather();
  cl('fn-showlocationrequest')
}

fetchWeather();

searchbar.addEventListener('change',  showlocationrequest)
