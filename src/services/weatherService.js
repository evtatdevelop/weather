export default class WeatherService {

  constructor() {
    // this._apiBase = 'http://api.openweathermap.org/data/2.5/weather?';
    // this._apiKey = '&appid=2a0eda8e7bea2c165ff7d39fceac58ed'
    this._apiKey = 'appid=2a0eda8e7bea2c165ff7d39fceac58ed'
    this._apiBase = `http://api.openweathermap.org/data/2.5/weather?${this._apiKey}&`;
    this.units = 'metric';
    this.lang = 'en'
  }

  async getWeather(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`could non fetch ${url}. Status: ${res.status}`);
    }

    return await res.json();
  }

  getWeaterByCityName(cityName) {
    return this.getWeather(`q=${cityName}&units=${this.units}&lang=ru`);
  }

  getWeaterByCityId(cityId) {
    return this.getWeather(`id=${cityId}&units=${this.units}&lang=th`);
  }

  getWeaterAroundPoint(latitude, longitude, count) {
    return this.getWeather(`lat=${latitude}&lon=${longitude}&cnt=${count}&units=${this.units}&lang=th`);
  }
}
