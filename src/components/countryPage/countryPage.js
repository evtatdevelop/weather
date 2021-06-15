import React, {Component} from 'react';
import ItemsList from '../itemsList';
import CountryDetails from '../countryDetails';
import Error from '../error';
import './countryPage.css';

import LocationService from '../../services/locationService';

export default class CountryPage extends Component {

  locationService = new LocationService();

  state = {
    selectedCountry: 'TH',
    error: false,
  }

  componentDidCatch() {
    this.setState({error: true})
  }

  onCountrySelected = code => {
    this.setState({selectedCountry: code})
  };

  render() {
    const {selectedCountry, error} = this.state;
    if (error) return <Error/>
    return (
      <>
        <CountryDetails countryCode={selectedCountry}/>
        <ItemsList 
          className='countryList'
          onCountrySelected={this.onCountrySelected}
          getData = {this.locationService.getAllCountries}  
        />
      </>
    )
  }
}