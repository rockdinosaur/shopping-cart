import React, { Component } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import ProductForm from './ProductForm';
// import seedData from './../seedData';
import store from '../store';

class Shop extends Component {
  componentDidMount() {
    // this.setState({ products: seedData });
    store.subscribe(() => this.forceUpdate());
  }

  render() {
    return (
      <div id="app">
        <Header
          cartItems={store.getState().cart}
          handleCheckoutClick={this.emptyCart}
        />
        <main>
          <ProductList
            products={store.getState().products}
            onAddToCartClick={this.addToCart}
          />
          <ProductForm
            onAddProduct={this.addProduct}
            mode='add'
          />
        </main>
      </div>
    );
  }
}

export default Shop;
