import React, {Component} from 'react';

import './randomLoc.css';

export default class RandomLoc extends Component {
  
  render() {
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