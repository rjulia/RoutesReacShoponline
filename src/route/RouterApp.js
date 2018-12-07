import React, { Component } from 'react';
import { BrowserRouter , Route, Switch } from "react-router-dom";
import {Inicio, Nosotros} from '../components/Index'

class RouterApp extends Component {
  render() {
    return (
      <BrowserRouter>

          <Switch>
            <Route exact path="/" component={Inicio}/>
            <Route exact path="/Nosotros" component={Nosotros}/>


          </Switch>

      </BrowserRouter>
    )
  }
}

export default RouterApp 
