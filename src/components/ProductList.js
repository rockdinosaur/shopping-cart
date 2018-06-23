import React, { Component } from 'react';
import Product from './Product';

class ProductList extends Component {
  render() {
    const products = this.props.products.map(product => {
      return <Product
        key={`product-${product.id}`}
        product={product}
        handleAddToCart={this.props.handleAddToCart}
        handleDeleteProduct={this.props.handleDeleteProduct}
        handleEditProduct={this.props.handleEditProduct}
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
