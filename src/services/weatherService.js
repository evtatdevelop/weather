export default class WeatherService {

  constructor() {
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

  async getWeaterByCityName(cityName) {
    const res = await this.getWeather(`q=${cityName}&units=${this.units}&lang=${this.lang}`);
    return this._transforData(res);
  }

  async getWeaterByCityId(cityId) {
    const res = await this.getWeather(`id=${cityId}&units=${this.units}&lang=en`);
    return this._transforData(res);
  }

  async getWeaterAroundPoint(latitude, longitude, count) {
    const res = await this.getWeather(`lat=${latitude}&lon=${longitude}&cnt=${count}&units=${this.units}&lang=en`);
    return this._transforData(res);
  }

  _transforData(data) {
    return {
      city: data.name,
      time: data.timezone,
      temp: data.main.temp,
      desc: data.weather[0].description,
    }
  }
}
