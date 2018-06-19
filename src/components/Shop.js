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
    let updatedCart;

    if (this.state.cart.some(product => product.id === id)) {
      updatedCart = this.state.cart.map(product => {
        if (product.id === id) {
          return Object.assign({}, product, { quantity: product.quantity + 1 })
        } else {
          return product;
        }
      })
    } else {
      const product = this.state.products.filter(p => p.id === id)[0];
      const productToAdd = Object.assign({}, product, { quantity: 1 });
      updatedCart = this.state.cart.concat(productToAdd);
    }

    const updatedProducts = this.state.products.map((product) => {
      if (product.id === id) {
        return Object.assign({}, product, {
          quantity: product.quantity - 1,
        });
      } else {
        return product;
      }
    });

    this.setState(prevState => {
      return {
        cart: updatedCart,
        products: updatedProducts
      }
    })
  }

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
