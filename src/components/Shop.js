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

  getUpdatedCart = (id) => {
    let updatedCart;
    const productIdx = this.state.cart.findIndex(p => p.id === id);

    if (productIdx !== -1) {
      const product = {
        ...this.state.cart[productIdx]
      }

      product.quantity += 1;
      updatedCart = [...this.state.cart];
      updatedCart[productIdx] = product;
    } else {
      const product = this.state.products.filter(p => p.id === id)[0];
      const productToAdd = Object.assign({}, product, { quantity: 1 });
      updatedCart = [...this.state.cart, productToAdd];
    }

    return updatedCart;
  }

  getUpdatedProducts = (id) => {
    return this.state.products.map((product) => {
      if (product.id === id) {
        return Object.assign({}, product, {
          quantity: product.quantity - 1,
        });
      } else {
        return product;
      }
    });
  }

  addToCart = (id) => {
    this.setState(prevState => {
      return {
        cart: this.getUpdatedCart(id),
        products: this.getUpdatedProducts(id)
      }
    })
  }

  emptyCart = () => {
    this.setState(prevState => {
      return ({
        cart: []
      })
    })
  }

  render() {
    return (
      <div id="app">
        <Header
          cartItems={this.state.cart}
          handleCheckoutClick={this.emptyCart}
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
