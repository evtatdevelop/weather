import React, { Component } from 'react';

import './app.css';
import RandomLoc from '../randomLoc';
import CountryPage from '../countryPage'
import CityPage from '../cityPage/';
import Error from '../error';
import LocationService from '../../services/locationService';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

// import ItemsList from '../itemsList';
// import CountryDetails, {Fieald} from '../countryDetails';

export default class App extends Component {

  locationService = new LocationService();

  state = {
    widget: true,
    btnLabel: 'Close',
    selectedCountry: 'TH',
    selectedCity: null,
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

  onContrySelected = code => {
    this.setState({selectedCountry: code})
  };

  onCitySelected = code => {
    const name = code.slice(0, code.indexOf('-')).replace(/_/g," ");
    this.setState({selectedCity: name});
  };

  render() {
    // const {widget, btnLabel, selectedCountry, selectedCity, error} = this.state;
    const {widget, btnLabel, error, selectedCountry, selectedCity} = this.state;
    const widgetComponent = widget ? <RandomLoc selectedCity = {selectedCity}/> : null;
    if (error) return <Error/>
    
    return (
      <Router>
        <div className = "app">
          <h1 className = "appName"><Link to='/'>Simple Weather</Link></h1>



          <div className = "modules">
            {widgetComponent}
          </div>
          <button className = 'closeButton' onClick = {() => this.toggleWidget(widget)}>{btnLabel} Widget</button>
          
          <nav><ul className='navigation'>
            <li><Link to='/countries'>Countries</Link></li>
            <li><Link to='/cities'>Cities</Link></li>
          </ul></nav>
          
          {/* <Route path = '/countries' component = {CountryPage} /> */}
          <Route exact path='/countries' render={(props) => <CountryPage selectedCountry = {selectedCountry} onContrySelected = {this.onContrySelected} {...props} /> } />
          {/* <Route path = '/cities' component = {CityPage} /> */}
          <Route exact path='/cities' render={(props) => <CityPage selectedCountry = {selectedCountry} onCitySelected = {this.onCitySelected} selectedCity = {selectedCity} {...props} /> } />


          {/* <CountryPage
            selectedCountry = {selectedCountry}
            onContrySelected = {this.onContrySelected}
          />
          <CityPage 
            selectedCountry = {selectedCountry}
            selectedCity = {selectedCity}
            onCitySelected = {this.onCitySelected}
          /> */}
        
        </div>        
      </Router>

    );
  }

}