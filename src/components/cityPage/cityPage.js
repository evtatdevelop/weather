import React, {Component} from 'react';
import ItemsList from '../itemsList';
import ItemDetails, {Field} from '../itemDetails';
import RenderBlock from '../renderBlock';
import Error from '../error';

import './cityPage.css';

import LocationService from '../../services/locationService';

export default class CityPage extends Component {

  locationService = new LocationService();

  state = {
    selectedItem: null,
    // selectedCountry: 'TH',
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
    // const {selectedCountry, selectedItem, error} = this.state;
    // const {selectedItem, error} = this.state;
    const {error} = this.state;
    const {selectedCountry} = this.props;
    const selectedItem = this.props.selectedCity;

    if (error) return <Error/>
    
    const countryDetails = (
      <ItemDetails 
      itemCode = {selectedItem}
      getData = {() => this.locationService.getCityByName(selectedItem)}
    >
      <Field field = 'country' label = 'Country'/>
      {/* <Field field = 'name' label = 'Name'/> */}
      <Field field = 'lat' label = 'Latitude'/>
      <Field field = 'lng' label = 'Longitude'/>
      <Field field = 'gooLink' label = 'Map'/>
    </ItemDetails> 
    );

    const itemsList = (
      <ItemsList
        itemCode = {selectedCountry}
        className='countryList'
        // onItemSelected = {this.onItemSelected}
        onItemSelected = {this.props.onCitySelected}
        getData = {() => this.locationService.getCitiesByCountryCode(selectedCountry)}
        renderItem = {(item) => `${item.name}`}
      />
    );

    return (
      <RenderBlock top = {countryDetails} bottom = {itemsList}/>  
    )
  }
}