import React, {Component} from 'react';
import ItemsList from '../itemsList';
import CountryDetails, {Fieald} from '../countryDetails';
import RenderBlock from '../renderBlock';
import Error from '../error';

import './cityPage.css';

import LocationService from '../../services/locationService';

export default class CityPage extends Component {

  locationService = new LocationService();

  state = {
    selectedItem: 'Bangkok',
    selectedCountry: 'TH',
    error: false,
  }

  componentDidCatch() {
    this.setState({error: true})
  }

  onItemSelected = code => {
    const name = code.slice(0, code.indexOf('-')).replace(/_/g," ");
    this.setState({selectedItem: name});
  };

  render() {
    const {selectedCountry, selectedItem, error} = this.state;
    if (error) return <Error/>
    
    const countryDetails = (
      <CountryDetails 
      itemCode={selectedItem}
      getData = {() => this.locationService.getCityByName(selectedItem)}
    >
      <Fieald field = 'country' label = 'Country'/>
      <Fieald field = 'name' label = 'Name'/>
      <Fieald field = 'lat' label = 'Latitude'/>
      <Fieald field = 'lng' label = 'Longitude'/>
    </CountryDetails> 
    );

    const itemsList = (
      <ItemsList 
        className='countryList'
        onItemSelected={this.onItemSelected}
        getData = {() => this.locationService.getCitiesByCountryCode(selectedCountry)}
        renderItem = {(item) => `${item.name}`}
      />
    );

    return (
      <RenderBlock top = {countryDetails} bottom = {itemsList}/>  
    )
  }
}