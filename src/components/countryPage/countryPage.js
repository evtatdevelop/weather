import React, {Component} from 'react';
import CountryList from '../countryList';
import CountryDetails from '../countryDetails';
import Error from '../error';
import './countryPage.css';

export default class CountryPage extends Component {

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
        <CountryList className='countryList' onCountrySelected={this.onCountrySelected}/>
      </>
    )
  }
}