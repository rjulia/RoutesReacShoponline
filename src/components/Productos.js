import React, { Component } from 'react'
import { Product  } from "./Index";
export default class Productos extends Component {
  render() {
    return (
      <div className="productos">
        <h2>Nuetros Productos</h2>

        <ul className="lista-productos">
          {this.props.productos.map((product, idx) => 
              <Product id={idx} product={product}/>
          )}
        </ul>
      </div>
    )
  }
}
