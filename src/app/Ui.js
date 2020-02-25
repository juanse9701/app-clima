/**
 * Archivo encargado del DOM
 */

 export class UI {

    constructor() {
        this.location = document.getElementById('weather-location');
        this.desc = document.getElementById('weather-description');
        this.string = document.getElementById('weather-string');
        this.humidity = document.getElementById('weather-humidity');
        this.wind = document.getElementById('weather-wind');
    }

    render(weather) {
        if (weather) {
            this.location.textContent = weather.name + '/' + weather.sys.country;
            this.desc.textContent = weather.weather[0].description;
            this.string.textContent = weather.main.temp + '°C';
            this.humidity.textContent = 'Humedad '+weather.main.humidity + '%';
            this.wind.textContent = 'Viento '+weather.wind.speed+' m/s'; 
        }
    }
 }