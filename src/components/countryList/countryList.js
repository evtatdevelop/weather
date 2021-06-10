import React, {Component} from 'react';

import './countryList.css';
import LocationService from '../../services/locationService';
import Spiner from '../spiner';

export default class CountryList extends Component {
  
  locationService = new LocationService();

  state = {
    countries: null
  }

  componentDidMount() {
    const countries = this.locationService.getAllCountries()
    this.setState({countries})
  }

  renderCountryList(data) {
    return data.map(country => {
      const [code, {name}] = country;
      return (
        <li 
          key={code}
          className='countryListItem'
          onClick={() => this.props.onCountrySelected(code)}
        >{name}</li>)
    })
  }

  render() {
    const {countries} = this.state;
    if (!countries) return <Spiner/>
    const countryList = this.renderCountryList(countries);

    return (
      <ul className='countryList'>
        {countryList}
      </ul>
    )
  }
}