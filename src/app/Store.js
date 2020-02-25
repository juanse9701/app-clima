/**
 * Archivo encargado de LocalStorage
 */

export class Store {

    constructor() {
        this.city;
        this.countryCode;
        this.defailtCity = 'bogota'
        this.defaultCountry = 'co'
    }

    setLocationData(city, countryCode) {
        localStorage.setItem('city', city);
        localStorage.setItem('countryCode', countryCode);
    }

    getLocationData() {
        if(localStorage.getItem('city') === null) {
            this.city = this.defailtCity;
            this.countryCode = this.defaultCountry;
        } else {
            this.city = localStorage.getItem('city', city);
            this.countryCode =localStorage.getItem('countryCode', countryCode);
        }

        return {
            city: this.city,
            countryCode: this.countryCode
        }
    }
}