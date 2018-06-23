import React, { Component } from 'react';
import Header from './Header';
import ProductListContainer from './ProductListContainer';
import ProductForm from './ProductForm';
import store from '../store';

class Shop extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }

  handleAddNewProduct = (productData) => {
    const addAction = {
      type: 'ADD_PRODUCT',
      productData: productData,
    }
    store.dispatch(addAction);
  }

  render() {
    return (
      <div id="app">
        <Header />
        <main>
          <ProductListContainer />
          <ProductForm
            mode='add'
            handleAddNewProduct={this.handleAddNewProduct}
          />
        </main>
      </div>
    );
  }
}

export default Shop;
