
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

  getAllCitiуs = () => cities;

  getCitiesByCountryCode = countryCode => {
    return cities.filter(city => city.country === countryCode).reduce((res,item) => {
      const code = Math.random() * item.lat * item.lng * 1.e15;
      res.push({'code': code, ...item});
      return res;
    }, [])
  };

  getRandomCity = () => cities[Math.floor(Math.random() * cities.length)].name;
  
  getAllCountries = () => {
    return Object.entries(countries.countries).reduce((res, item) => {
      res.push({'code': item[0], ...item[1]});
      return res;
    }, [])
  }
  
  getCountryByCode = code => countries.countries[code];
  
  getCountryNameByCode = code => countries.countries[code].name;
  
  getContinentNameByCode = code => countries.continents[code];
  
  getLanguageByCode = code => {
    if(!countries.languages[code]) return;
    return countries.languages[code].name;
  }

}