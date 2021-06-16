import React, {Component} from 'react';

import './countryDetails.css';
import LocationService from '../../services/locationService';
// import Spiner from '../spiner';

const Fieald = ({country, field, label}) => {
  return (
    // <li><span>{label}</span>{item[field]}</li>
    <li><span>{label}</span>{country[field]}</li>
  )
}
export {Fieald}

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
    this.setState({country: country})
  }

  render() {
    if (!this.state.country) {
      return <span className='cselectError'>Select country, please</span>
    }
    // const {name, capital, continent, currency, emoji, native, phone, langs} = this.state.country;
    const {name, emoji, native} = this.state.country;
    const {country} = this.state;
    return (
      <ul className='detailList'>
        <li className='name'>{name} ({native} |{emoji})</li>
        {/* <li><span>Capital</span> {capital}</li>
        <li><span>Continent</span> {continent}</li>
        <li><span>Currency</span> {currency}</li>
        <li><span>Languages</span> {langs}</li>
        <li><span>Phone code</span> {phone}</li> */}
        {React.Children.map(this.props.children, (child => {
          return React.cloneElement(child, {country})
        }))}
      </ul>
    )
  }
}