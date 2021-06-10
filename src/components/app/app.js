import React, { Component } from 'react';

import './app.css';
import RandomLoc from '../randomLoc';
// import CountryList from '../countryList';
// import CountryDetails from '../countryDetails';
import CountryPage from '../countryPage'
import Error from '../error';

export default class App extends Component {

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
    // console.log(this.state.selectedCountry);
    // const {widget, btnLabel, selectedCountry, error} = this.state;
    const {widget, btnLabel, error} = this.state;
    const widgetComponent = widget ? <RandomLoc/> : null;
    if (error) return <Error/>
    return (
      <div className="app">
        <h1 className="appName">Weather</h1>
        <div className="modules">
          {widgetComponent}
        </div>
        <button className='closeButton' onClick={() => this.toggleWidget(widget)}>{btnLabel} Widget</button>
        {/* <CountryDetails countryCode={selectedCountry}/>
        <CountryList className='countryList' onCountrySelected={this.onCountrySelected}/> */}
        <CountryPage/>
      </div>
    );
  }

}