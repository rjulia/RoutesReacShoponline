import React, { Component } from 'react';
import './Product.scss';
import {Link} from 'react-router-dom';

class Product extends Component {
  render() { 
    const { imagen, precio, nombre, id } = this.props.product
    return ( 
      <li id={id}>
        <img src={`img/${imagen}.png`} alt=""/>
        <p>{nombre} <span>{precio}$</span></p>
        <Link to={`/producto/${id}`}>Ver mLinks</Link>
      </li>
    );
  }
}
 
export default Product;