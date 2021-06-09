import React, { Component } from 'react';

import './app.css';
import RandomLoc from '../randomLoc';



export default class App extends Component {

  state = {
    widget: true,
    btnLabel: 'Close',
  }

  toggleWidget = (widget) => {
    this.setState({
      widget: !widget,
      btnLabel: widget ? 'Open' : 'Close',
    })
  }

  render() {
    const {widget, btnLabel} = this.state;
    const widgetComponent = widget ? <RandomLoc/> : null;
    return (
      <div className="app">
        <h1 className="appName">Weather</h1>
        <div className="modules">
          {widgetComponent}
        </div>
        <button className='closeButton' onClick={() => this.toggleWidget(widget)}>{btnLabel} Widget</button>
      </div>
    );
  }

}