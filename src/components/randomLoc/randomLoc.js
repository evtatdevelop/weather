import React, {Component} from 'react';

import './randomLoc.css';

import WeatherService from '../../services/weatherService';
export default class RandomLoc extends Component {
  state = {
    weather: {}
  }

  render() {

    const wservice = new WeatherService();
  
    wservice.getWeaterByCityName('Kemerovo')
      .then(res => console.log(res));
    
      wservice.getWeaterByCityId('1609348')
      .then(res => console.log(res));
    
      wservice.getWeaterAroundPoint(12.93, 100.88, 10)
      .then(res => console.log(res));


    return <section className="module">
      <h2 className="cityName">Exampele city</h2>
      <ul className="weatherList">
        <li><p>Local time</p><p>12:55</p></li>
        <li><p>Temperature</p><p>32C</p></li>
        <li><p>Description</p><p>clear sky</p></li>
      </ul>
    </section>
  }
}