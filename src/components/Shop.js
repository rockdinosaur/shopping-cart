import React, { Component } from 'react';
import Header from './Header';
import ProductList from './ProductList';

import seedData from './../seedData';

class Shop extends Component {
  state = {
    cart: [],
    products: []
  };

  componentDidMount() {
    this.setState({ products: seedData });
  }

  addToCart = (id) => {
    this.state.products.forEach((product) => {
      if (product.id === id) {
        this.setState(prevState => {
          return {
            cart: prevState.cart.concat(product)
          }
        });
      }
    })
  };

  render() {
    return (
      <div id="app">
        <Header
          cartItems={this.state.cart}
        />
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
