import React, {Component} from 'react';

import './countryDetails.css';
import LocationService from '../../services/locationService';
// import Spiner from '../spiner';

export default class CountryDetails extends Component {
  
  locationService = new LocationService();

  state = {
    country: null
  }

  componentDidMount() {
    this.updateCountryDetails();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.countryCode !== this.props.countryCode) {
      this.updateCountryDetails();
    }
  }
  
  updateCountryDetails() {
    const {countryCode} = this.props;
    if(!countryCode) return;
    const country = this.locationService.getCountryByCode(countryCode);
    country.continent = this.locationService.getContinentNameByCode(country.continent)
    country['langs'] = country.languages.reduce((str, item) => str==='' ? this.locationService.getLanguageByCode(item) : str + ', ' + this.locationService.getLanguageByCode(item), '')
    // console.log(country)
    this.setState({country: country})
    // this.foo.bar = 0;
  }

  render() {
    if (!this.state.country) {
      return <span className='cselectError'>Select country, please</span>
    }
    const {name, capital, continent, currency, emoji, native, phone, langs} = this.state.country;

    return (
      <ul className='detailList'>
        <li className='name'>{name} ({native} |{emoji})</li>
        <li><span>Capital</span> {capital}</li>
        <li><span>Continent</span> {continent}</li>
        <li><span>Currency</span> {currency}</li>
        <li><span>Languages</span> {langs}</li>
        <li><span>Phone code</span> {phone}</li>
      </ul>
    )
  }
}