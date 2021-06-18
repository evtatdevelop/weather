// https://gist.githubusercontent.com/Fluidbyte/2973986/raw/5fda5e87189b066e11c1bf80bbfbecb556cf2cc1/Common-Currency.json

export default class WeatherService {

  constructor() {
    this._apiKey = 'appid=2a0eda8e7bea2c165ff7d39fceac58ed'
    this._apiBase = `http://api.openweathermap.org/data/2.5/weather?${this._apiKey}&`;
    this.units = 'metric';
    this.lang = 'en'
  }

  async getAllCurrency() {
    const res = await fetch(`https://gist.githubusercontent.com/Fluidbyte/2973986/raw/5fda5e87189b066e11c1bf80bbfbecb556cf2cc1/Common-Currency.json`);
    if (!res.ok) {
      throw new Error(`could non fetch. Status: ${res.status}`);
    }
    return await res.json();
    // const json =  await res.json();
    // return Object.entries(json).reduce((res, item) => {
    //   res.push({'code': item[0], ...item[1]});
    //   return res;
    // }, []).sort((a, b) => ('' + a.code).localeCompare(b.code))
  }

  async getCurrencyByCode(code) {
    const res = await this.getAllCurrency()
    return this._transforData(res[code]);
  }

  // async getWeaterByCityName(cityName) {
  //   const res = await this.getWeather(`q=${cityName}&units=${this.units}&lang=${this.lang}`);
  //   return this._transforData(res);
  // }

  // async getWeaterByCityId(cityId) {
  //   const res = await this.getWeather(`id=${cityId}&units=${this.units}&lang=en`);
  //   return this._transforData(res);
  // }

  // async getWeaterAroundPoint(latitude, longitude, count) {
  //   const res = await this.getWeather(`lat=${latitude}&lon=${longitude}&cnt=${count}&units=${this.units}&lang=en`);
  //   return this._transforData(res);
  // }

  _transforData(currency) {
    return {
      code: currency.code,
      name: currency.name,
      symbol: currency.symbol,
      native: currency.symbol_native,
    }
  }
}
