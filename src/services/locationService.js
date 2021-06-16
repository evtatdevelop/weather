
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
      const code = item.name.replace(/ /g,"_") + `-${Math.random()}`;
      res.push({'code': code, ...item});
      return res;
    }, [])
  };

  getCityByName = name => {
    let city = cities.filter(item => item.name === name)[0];
    if (city) city = {...city, 'gooLink': `http://www.google.com/maps/place/${city.lat},${city.lng}`};
    // console.log(city);
    return city;
  };

  getRandomCity = () => cities[Math.floor(Math.random() * cities.length)].name;
  
  getAllCountries = () => {
    return Object.entries(countries.countries).reduce((res, item) => {
      res.push({'code': item[0], ...item[1]});
      return res;
    }, [])
  }
  
  getCountryByCode = code => {
    const country = countries.countries[code]
    country.continent = this.getContinentNameByCode(country.continent)
    country['langs'] = country.languages.reduce((str, item) => str==='' ? this.getLanguageByCode(item) : str + ', ' + this.getLanguageByCode(item), '');
    return country;
  };
  
  getCountryNameByCode = code => countries.countries[code].name;
  
  getContinentNameByCode = code => countries.continents[code];
  
  getLanguageByCode = code => {
    if(!countries.languages[code]) return;
    return countries.languages[code].name;
  }

}