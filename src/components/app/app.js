import React from 'react';

import './app.css';
import RandomLoc from '../randomLoc';

function App() {

  return (
    <div className="app">
      <h1 className="appName">Weather</h1>
      <div className="modules">
        <RandomLoc/>
      </div>
      
    </div>
  );
}

export default App;
