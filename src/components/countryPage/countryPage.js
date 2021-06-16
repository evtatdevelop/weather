import React, {Component} from 'react';
import ItemsList from '../itemsList';
import CountryDetails, {Fieald} from '../countryDetails';
import RenderBlock from '../renderBlock';
import Error from '../error';

import './countryPage.css';

import LocationService from '../../services/locationService';

export default class CountryPage extends Component {

  locationService = new LocationService();

  state = {
    selectedItem: 'TH',
    error: false,
  }

  componentDidCatch() {
    this.setState({error: true})
  }

  onItemSelected = code => {
    this.setState({selectedItem: code})
  };

  render() {
    const {selectedItem, error} = this.state;
    if (error) return <Error/>
    
    const countryDetails = (
      <CountryDetails countryCode={selectedItem}>
        <Fieald field = 'capital' label = 'Capital'/>
        <Fieald field = 'continent' label = 'Continent'/>
        <Fieald field = 'currency' label = 'Currency'/>
        <Fieald field = 'langs' label = 'Languages'/>
        <Fieald field = 'phone' label = 'Phone code'/>
      </CountryDetails>  
    );

    const itemsList = (
      <ItemsList 
        onItemSelected={this.onItemSelected}
        getData = {this.locationService.getAllCountries}
        renderItem = {({name, emoji}) => (<><span>{name}</span><span>{emoji}</span></>)}
      />
    );

    return (
      <RenderBlock top = {countryDetails} bottom = {itemsList}/>  
    )
  }
}