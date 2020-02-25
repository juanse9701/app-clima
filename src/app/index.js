const { Weather } = require('./Weather.js');
const { UI } = require('./Ui.js');
const { Store } = require('./Store.js')
require('./index.css');
const ui = new UI();
const store = new Store();
const {city, countrycode} =  store.getLocationData();
const weather = new Weather(city, countrycode);

async function fetchWeather() {
   const data = await weather.getWeather();
   ui.render(data);
}


/**
 * Este evento me permite llamar a la función fetch weather una vez se ha cargado todo el contenido en el DOM
 */
document.addEventListener('DOMContentLoaded', fetchWeather);

document.getElementById('w-change-id').addEventListener('click', () => {
    const city = document.getElementById('city').value;
    const countrycode = document.getElementById('countryCode').value;
    weather.changeLocation(city, countrycode);
    store.setLocationData(city, countrycode);
    fetchWeather();
});