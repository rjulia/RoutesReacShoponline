import React, { Component } from 'react';
import './SinglePorducto.scss'

class SingleProduct extends Component {
  render() {
    const {imagen, nombre, precio, id } = this.props.productDetail
    if(!imagen) return null;
    return (
      <div className="info-producto">
        <div className="imagen">
          <img src={`/img/${imagen}.png`} alt={nombre}/>

        </div>
        <h2>{nombre} <span>{precio}$</span></h2>
      </div>
    );
  }
}

export default SingleProduct;