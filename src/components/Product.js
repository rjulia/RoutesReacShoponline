import React, { Component } from 'react';
import './Product.scss'

class Product extends Component {
  render() { 
    const { imagen, precio, nombre } = this.props.product
    return ( 
      <li>
        <img src={`img/${imagen}.png`} alt=""/>
        <p>{nombre} <span>{precio}$</span></p>
        <a href="http://google.com">Ver mas</a>
      </li>
    );
  }
}
 
export default Product;