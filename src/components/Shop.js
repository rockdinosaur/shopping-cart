import React, { Component } from 'react';
import Header from './Header';
import ProductListContainer from './ProductListContainer';
import AddProductContainer from './AddProductContainer';
import store from '../store';

class Shop extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }

  render() {
    return (
      <div id="app">
        <Header />
        <main>
          <ProductListContainer />
          <AddProductContainer />
        </main>
      </div>
    );
  }
}

export default Shop;
