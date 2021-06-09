
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
  async getCiteis() {
    // const res = await fetch('https://gist.githubusercontent.com/gorborukov/0722a93c35dfba96337b/raw/435b297ac6d90d13a68935e1ec7a69a225969e58/russia');
    // if (!res.ok) {
    //   throw new Error(`could non fetch. Status: ${res.status}`);
    // }

    // const data =  await res.json();
    // console.log(data);
    // data.map(item => console.log(item.city) )

  }
  // https://gist.githubusercontent.com/keeguon/2310008/raw/bdc2ce1c1e3f28f9cab5b4393c7549f38361be4e/countries.json

  
  getRandomCity() {
    return cities[Math.floor(Math.random() * cities.length)].name;
  }
  
  getCountryByCode(code) {
    return countries.countries[code].name;
  }

}