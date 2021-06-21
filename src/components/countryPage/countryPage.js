import React, {Component} from 'react';
import ItemsList from '../itemsList';
import ItemDetails, {Field} from '../itemDetails';
import RenderBlock from '../renderBlock';
import Error from '../error';

import './countryPage.css';

import LocationService from '../../services/locationService';
import CurrencyService from '../../services/currencyService';


export default class CountryPage extends Component {

  locationService = new LocationService();
  currencyService = new CurrencyService();

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

    // console.log(this.currencyService.getAllCurrency())
    
    // this.currencyService.getCurrencyByCode('THB')
    // .then(data => console.log(data));

    // .then (item => console.log(item));

    // const {selectedItem, error} = this.state;
    const {error} = this.state;
    const selectedItem = this.props.selectedCountry;
    if (error) return <Error/>
    
    const countryDetails = (
      <ItemDetails 
        itemCode = {selectedItem}
        getData = {() => this.locationService.getCountryByCode(selectedItem)}
      >
        <Field field = 'native' label = 'Native'/>
        <Field field = 'emoji' label = 'Flag'/>
        <Field field = 'capital' label = 'Capital'/>
        <Field field = 'continent' label = 'Continent'/>
        <Field field = 'currency' label = 'Currency'/>
        <Field field = 'langs' label = 'Languages'/>
        <Field field = 'phone' label = 'Phone code'/>
      </ItemDetails>  
    );

    const itemsList = (
      <ItemsList 
        // onItemSelected = {this.onItemSelected}
        onItemSelected = {this.props.onContrySelected}
        getData = {this.locationService.getAllCountries}
        renderItem = {({name, emoji}) => (<><span>{name}</span><span>{emoji}</span></>)}
      />
    );

    return (
      <RenderBlock top = {countryDetails} bottom = {itemsList}/>  
    )
  }
}