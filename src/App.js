import React, { Component } from 'react';
import './App.css';
import RouterApp from './route/RouterApp.js';

class App extends Component {
  render() {
    return (
      <div className="contenedor">
        <RouterApp />
      </div>
    );
  }
}

export default App;
