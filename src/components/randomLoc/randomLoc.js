import React, {Component} from 'react';

import './randomLoc.css';
import WeatherService from '../../services/weatherService';
import Spiner from '../spiner';
import Error from '../error';
export default class RandomLoc extends Component {

  constructor() {
    super();
    
    this.citiesList = ['Bangkok', 'Kemerovo', 'Singapore', 'Hong Kong', 'Chiang Mai', 'Pattaya', 'Moscow'];
    this.updateWeather();
  }
  
  wservice = new WeatherService();
  
  state = {
    data: {},
    loading: true,
    error: false,
  }
  
  onDataLoad = (data) => this.setState({
    data,
    loading: false,
  });

  onError = (err) => this.setState({
    error: true,
    loading: false,
  });

  updateWeather() {
    const name = this.citiesList[Math.floor(Math.random() * this.citiesList.length)];
    this.wservice.getWeaterByCityName(name)
      .then(this.onDataLoad)
      .catch(this.onError);
  }

  render() {
    const { data, loading, error } = this.state;  

    const errorMsg = error ? <Error/> : null;
    const spiner = loading ? <Spiner/> : null;
    const content = !(loading || error) ? <View data={data}/> : null;

    return <section className="module">
      {errorMsg}
      {spiner}
      {content}
    </section>
  }
}

const View = ({data}) => {
  const {city, time, temp, desc} = data;
  
  const getLocalTimebyUtsShift = utsShift => {
    const Time = new Date()
    const ts = Time.getTime();
    const shift = Time.getTimezoneOffset()*60*1000;
    const uts = ts + shift;
    const Local = new Date(uts + utsShift * 1000);
    return `${Local.getHours()}:${Local.getMinutes()}`;
  }  

  return(
    <>
      <h2 className="cityName">{city}</h2>
      <ul className="weatherList">
        <li><p>Local time</p><p>{getLocalTimebyUtsShift(time)}</p></li>
        <li><p>Temperature</p><p>{Math.round(temp)}	&deg;C</p></li>
        <li><p>Description</p><p>{desc}</p></li>
      </ul>  
    </>
  );
}