import React, {Component} from 'react';

import './randomLoc.css';
import WeatherService from '../../services/weatherService';
import LocationService from '../../services/locationService';
import Spiner from '../spiner';
import Error from '../error';
export default class RandomLoc extends Component {

  constructor() {
    super();
    this.citiesList = ['Bangkok', 'Kemerovo', 'Singapore', 'Hong Kong', 'Chiang Mai', 'Pattaya', 'Moscow'];
  }
  
  wservice = new WeatherService();
  locationService = new LocationService();

  state = {
    data: {},
    loading: true,
    error: false,
    city: null,
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.selectedCity !== this.props.selectedCity) {
      this.updateWeather();
    }
  }

  onDataLoad = (data) => this.setState({
    data,
    loading: false,
    error: false,
  });

  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    });
};

  updateWeather = () => {
    // const name = this.locationService.getRandomCity();

    const name = (!this.props.selectedCity) ? this.locationService.getRandomCity() : this.props.selectedCity;
    
    this.wservice.getWeaterByCityName(name)
      .then(this.onDataLoad)
      .catch(this.onError);
  }

  componentDidMount() {
    this.updateWeather();
    this.timerId = setInterval(this.updateWeather, 7000);
  }
  componentWillUnmount() {
    clearInterval(this.timerId);
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
  const {city, time, temp, desc, country} = data;

  const locationService = new LocationService();
  
  const getLocalTimebyUtsShift = utsShift => {
    const Time = new Date()
    const ts = Time.getTime();
    const shift = Time.getTimezoneOffset()*60*1000;
    const uts = ts + shift;
    const Local = new Date(uts + utsShift * 1000);
    const hour = Local.getHours();
    const hh = hour < 10 ? `0${hour}` : hour;
    const min = Local.getMinutes();
    const mm = min < 10 ? `0${min}` : min;
    return `${hh}:${mm}`;
  }  

  return(
    <>
      <h2 className="cityName">{city} ({locationService.getCountryNameByCode(country)})</h2>
      <ul className="weatherList">
        <li><p>Local time</p><p>{getLocalTimebyUtsShift(time)}</p></li>
        <li><p>Temperature</p><p>{Math.round(temp)}	&deg;C</p></li>
        <li><p>Description</p><p>{desc}</p></li>
      </ul>  
    </>
  );
}