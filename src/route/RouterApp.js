import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Nosotros, Error404, Productos, Header, SingleProduct } from '../components/Index';
import products from "../data/data.json";
import Navigation from './Navegation'

class RouterApp extends Component {

  state = {
    products: [],
    termShearch: ''
  }

componentWillMount() {
  this.setState({
    products: products
  })
}

search = (term) => {
  if (term.length > 3) {

    this.setState({
      termShearch: term
    })
    
  } else {
    this.setState({
      termShearch: ''
    })
  }

  console.log(term)
}
render() {

  let products = [...this.state.products];

  let search = this.state.termShearch;

  let productsFilter;
  if (search !== '') {

    productsFilter = products.filter(product => product.nombre.toLowerCase().includes(search.toLowerCase()))
  } else {
    productsFilter = products
  }


  return (
    <BrowserRouter>
      <React.Fragment>
      <Navigation/>
        <Header/>
      
        <Switch>
          <Route exact path="/" render={() => (
            <Productos
              search = {this.search}
              productos={productsFilter}
            />
          )} />
          <Route exact path="/productos" render={() => (
            <Productos
            search = {this.search}
              productos={productsFilter}
            />
          )} />
          <Route exact path="/producto/:productoId" render={(props) => {
            let idProduct = props.location.pathname.replace('/producto/','' );
            
            return (
              <SingleProduct
                id={idProduct}
                productDetail = {this.state.products[idProduct]}
              
              />
            )
            
          }} />
          <Route exact path="/nosotros" component={Nosotros} />
          <Route component={Error404} />

        </Switch>
      </React.Fragment>
    </BrowserRouter>
      )
    }
  }
  
  export default RouterApp 