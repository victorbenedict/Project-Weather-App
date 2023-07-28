// API - 62f24f38c2764275bec14014232407

const cl = console.log;
const ct = console.table;

const conditionDisplay = document.querySelector('.conditionDisplay')
const tempDisplay = document.querySelector('.tempDisplay')
const tempfeelsDisplay = document.querySelector('.tempfeelsDisplay')


fetch('http://api.weatherapi.com/v1/current.json?key=62f24f38c2764275bec14014232407&q=Dadiangas&aqi=no', {
  mode: 'cors'
  }).then(function(response) {
    // Successful response :)
    cl('Successful')
    return response.json();
  }).then(function(response) {
    cl(response.current);

    let conditionData = response.current.condition.text
    let tempData = response.current.temp_c
    let tempfeelsData = response.current.feelslike_c

    conditionDisplay.textContent = `Condition: ${conditionData}`
    tempDisplay.textContent = `Temperature: ${tempData}`
    tempfeelsDisplay.textContent = `Feels like: ${tempfeelsData}`

  }).catch(function(err) {
    // Error :(
    cl('Error');
  });