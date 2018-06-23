import React, { Component } from 'react';
import ProductList from './ProductList';
import store from '../store';

class ProductListContainer extends Component {

  handleAddToCart = (productId) => {
    const addToCartAction = {
      type: 'ADD_TO_CART',
      id: productId
    }
    store.dispatch(addToCartAction);
  }

  handleDeleteProduct = (productId) => {
    store.dispatch({
      type: "DELETE_PRODUCT",
      id: productId
    });
  }

  handleEditProduct = (productData, productId) => {
    const editAction = {
      type: 'EDIT_PRODUCT',
      productData: productData,
      id: productId
    }
    store.dispatch(editAction);
  }

  render() {
    return (
      <ProductList
        products={store.getState().products}
        handleAddToCart={this.handleAddToCart}
        handleDeleteProduct={this.handleDeleteProduct}
        handleEditProduct={this.handleEditProduct}
      />
    );
  }
}

export default ProductListContainer;