import React, { Component } from 'react';

import Product from './Product';

class ProductList extends Component {
  render() {
    const products = this.props.products.map(product => {
      return <Product
        key={`product-${product.id}`}
        id={product.id}
        title={product.title}
        quantity={product.quantity}
        price={product.price}
        onAddToCartClick={this.props.onAddToCartClick}
      />
    });

    return (
      <div className="product-listing">
        <h2>Products</h2>
        {products}
      </div>
    )
  }
}

export default ProductList;
