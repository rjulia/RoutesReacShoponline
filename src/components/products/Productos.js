import React, { Component } from 'react'
import { Product, Search  } from "../Index"; 
export default class Productos extends Component {



  render() {
    return (
      <div className="productos">
        <h2>Nuetros Productos</h2>
        <Search search={this.props.search}/>
        <ul className="lista-productos">
          {this.props.productos.map((product, idx) => 
              <Product key={idx} product={product}/>
          )}
        </ul>
      </div>
    )
  }
}
