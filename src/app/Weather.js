/**
 * Archivo encargado de los datos del clima
 */

 export class Weather {

    constructor(city, countryCode) {
        this.apiKey= '46a47ebfadf10dfabc7bfded68d96c94';
        this.city = city;
        this.countryCode = countryCode;
    }

    async getWeather () {
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&APPID=${this.apiKey}&units=metric`;
        const response = await fetch(URL);
        const data = await response.json();
        return data;
    }

    changeLocation(city, countryCode) {
        this.city = city;
        this.countryCode = countryCode;
        
    }

 }