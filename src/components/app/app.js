import React, { Component } from 'react';

import './app.css';
import RandomLoc from '../randomLoc';
import CountryPage from '../countryPage'
import CityPage from '../cityPage/';
import Error from '../error';
import LocationService from '../../services/locationService';


// import ItemsList from '../itemsList';
// import CountryDetails, {Fieald} from '../countryDetails';

export default class App extends Component {

  locationService = new LocationService();

  state = {
    widget: true,
    btnLabel: 'Close',
    // selectedCountry: 'TH',
    // selectedCity: 'Bangkok',
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

  render() {
    // const {widget, btnLabel, selectedCountry, selectedCity, error} = this.state;
    const {widget, btnLabel, error} = this.state;
    const widgetComponent = widget ? <RandomLoc/> : null;
    if (error) return <Error/>
    
    return (
      <div className = "app">
        <h1 className = "appName">Weather</h1>
        <div className = "modules">
          {widgetComponent}
        </div>
        <button className = 'closeButton' onClick = {() => this.toggleWidget(widget)}>{btnLabel} Widget</button>
       
        <CountryPage/>
        <CityPage/>
      </div>
    );
  }

}