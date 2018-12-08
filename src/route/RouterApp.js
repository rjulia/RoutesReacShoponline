import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Nosotros, Error404, Productos, Header } from '../components/Index';
import products from "../data/data.json";

class RouterApp extends Component {

  state = {
    products: []
  }

componentWillMount() {
  this.setState({
    products: products
  })
}
render() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header/>
      
        <Switch>
          <Route exact path="/" render={() => (
            <Productos
              productos={this.state.products}
            />
          )} />
          <Route exact path="/nosotros" component={Nosotros} />
          <Route component={Error404} />

        </Switch>
      </React.Fragment>
    </BrowserRouter>
      )
    }
  }
  
  export default RouterApp 
