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
    ],
    cart: [
      {
        id: 1,
        title: 'Amazon Kindle E-reader',
        quantity: 5,
        price: 79.99
      },
    ],
  };

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
