import React, { Component } from 'react';

import './app.css';
import RandomLoc from '../randomLoc';
import CountryPage from '../countryPage'
import Error from '../error';
import ItemsList from '../itemsList';

import CountryDetails from '../countryDetails';
import LocationService from '../../services/locationService';

export default class App extends Component {

  locationService = new LocationService();

  state = {
    widget: true,
    btnLabel: 'Close',
    // selectedCountry: 'TH',
    error: false,
  }

  componentDidCatch() {
    console.error(Error);
    this.setState({error: true})
  }

  toggleWidget = (widget) => {
    this.setState({
      widget: !widget,
      btnLabel: widget ? 'Open' : 'Close',
    })
  }



  // onCountrySelected = code => {
  //   this.setState({selectedCountry: code})
  // };




  render() {
    const {widget, btnLabel, selectedCountry, error} = this.state;
    const widgetComponent = widget ? <RandomLoc/> : null;
    if (error) return <Error/>
    
    return (
      <div className="app">
        <h1 className="appName">Weather</h1>
        <div className="modules">
          {widgetComponent}
        </div>
        <button className='closeButton' onClick={() => this.toggleWidget(widget)}>{btnLabel} Widget</button>
       
        <CountryPage/>

        <CountryDetails countryCode={selectedCountry}/>
        <ItemsList 
          className='countryList'
          onItemSelected={this.onItemSelected}
          getData = {() => this.locationService.getCitiesByCountryCode('TH')}
          renderItem = {(item) => `${item.name}`}
        />

      </div>
    );
  }

}