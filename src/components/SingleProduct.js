import React, { Component } from 'react';


class SingleProduct extends Component {
  render() {
    return (
      <div >
        {this.props.productDetail.nombre}
      </div>
    );
  }
}

export default SingleProduct;