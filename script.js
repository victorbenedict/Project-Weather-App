// API - 62f24f38c2764275bec14014232407
// units - ℉ ℃

const cl = console.log;

let weatherCondition 
let weatherCondition_img
let locationName
let temp_c 
let temp_f
let tempfeels_c
let tempfeels_f 
let humidity 

//Set default
let temp_unit = 'C'
let locationUserRequest = 'Dadiangas'
let API_CallURL = `https://api.weatherapi.com/v1/current.json?key=62f24f38c2764275bec14014232407&q=Dadiangas&aqi=no`

function fetchWeather() {
  showLoading()
  fetch(API_CallURL, {
    mode: 'cors'
    }).then(function(response) {
      // Successful response :)
      cl('Successful')
      hideLoading()
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
      hideLoading()
      render()
    }).catch(function(err) {
      cl('Error');
      showLoading()
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
  location_div.textContent = `${locationName.name}, ${locationName.country}`
  if (temp_unit == 'C'){
    temp_div.textContent = `${temp_c} ℃` 
    tempfeels_div.textContent = `Feels like: ${tempfeels_c} ℃`  
  } else {
    temp_div.textContent = `${temp_f} ℉` 
    tempfeels_div.textContent = `Feels like: ${tempfeels_f} ℉`  
  }
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
  API_CallURL = `  https://api.weatherapi.com/v1/current.json?key=62f24f38c2764275bec14014232407&q=${locationUserRequest}&aqi=no`
  searchbar.value = ""
  fetchWeather();
  cl('fn-showlocationrequest')
}

function toggleTempUnit() {
  if (temp_unit == 'C') {
    temp_unit = 'F'
    btn_toggleTempUnit.textContent = '℉'
  } else {
    temp_unit = 'C'
    btn_toggleTempUnit.textContent = '℃'
  }
  render()
  cl('fn-toggleTempUnit')
}

function showLoading() {
  const loading_div = document.getElementById('loading')
  content.innerHTML = ""
  loading_div.classList.remove('hidden')
  loading_div.classList.add('show')
}
function hideLoading() {
  const loading_div = document.getElementById('loading')
  content.innerHTML = ""
  loading_div.classList.remove('show')
  loading_div.classList.add('hidden')
}

//event
searchbar.addEventListener('change',  showlocationrequest)
btn_toggleTempUnit.addEventListener('click', toggleTempUnit)
fetchWeather();
