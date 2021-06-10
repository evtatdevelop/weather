
import cities from 'cities.json'; // https://github.com/lutangar/cities.json
import countries from 'countries-list' // https://github.com/annexare/Countries

export default class CitiesService {
  // async getCiteis() {
    // fetch("http://api.travelpayouts.com/v2/prices/latest?currency=rub&period_type=year&page=1&limit=30&show_to_affiliates=true&sorting=price&token=45567c79cd37a9c5a1bd6d59a150428a", {
    //   "method": "GET",
    //   "headers": {
    //     "X-Access-Token": "45567c79cd37a9c5a1bd6d59a150428a",
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json',
    //     'Access-Control-Allow-Origin': 'http://localhost:3000',
    //     'Access-Control-Allow-Credentials': 'true'
    //   }
    // })
  //       .then(response => {
  //     console.log(response);
  //   })
  //   .catch(err => {
  //     console.error(err);
  //   });
  // }

  getAllCiteis() {
    return cities;
  }
  
  getRandomCity() {
    return cities[Math.floor(Math.random() * cities.length)].name;
  }

  getAllCountries() {
    return Object.entries(countries.countries);
  }

  getCountryByCode(code) {
    return countries.countries[code];
  }

  getCountryNameByCode(code) {
    return countries.countries[code].name;
  }

  getContinentNameByCode(code) {
    return countries.continents[code];
  }

  getLanguageByCode(code) {
    if(!countries.languages[code]) return;
    return countries.languages[code].name;
    // console.log(code)
    // console.log(countries.languages)
  }

}