import React, { Component } from 'react';
import Header from './Header';
import ProductList from './ProductList';

class Shop extends Component {
  state = {
    products: [
      {
        id: 1,
        title: 'Amazon Kindle E-reader',
        quantity: 5,
        price: 79.99
      },
      {
        id: 2,
        title: 'Apple 10.5-Inch iPad Pro',
        quantity: 3,
        price: 649.99
      },
      {
        id: 3,
        title: 'Yamaha Portable Keyboard',
        quantity: 2,
        price: 155.99
      },
      {
        id: 4,
        title: 'Tinker, Tailor, Soldier, Spy - A John le Carre Novel',
        quantity: 12,
        price: 13.74
      }
    ]
  }

  render() {
    return (
      <div id="app">
        <Header />
        <main>
          <ProductList
            products={this.state.products}
            onAddToCartClick={this.addToCart}
          />
          {/* <ProductForm /> */}
        </main>
      </div>
    );
  }
}

export default Shop;
