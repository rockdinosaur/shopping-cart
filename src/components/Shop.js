import React, { Component } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import ProductForm from './ProductForm';
import seedData from './../seedData';
import uuid from 'uuid';
import store from '../store';


// function cartReducer(state, action) {
//   if (action.type === 'ADD_TO_CART') {
//     const updatedCart = state.cart.concat(action.cartItem);
//     return {
//       cart: updatedCart
//     }
//   } else {
//     return state;
//   }
// }
class Shop extends Component {
  state = {
    cart: [],
    products: seedData
  }

  addProduct = product => {
    product.id = this.state.products.length + 1;
    this.setState(prevState => ({ products: [...this.state.products, product] }));
  }

  componentDidMount() {
    this.setState({ products: seedData });
    store.subscribe(() => this.forceUpdate());
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

  editProduct = (updatedProduct, id) => {
    const updatedProducts = this.state.products.map((product) => {
      if (product.id === id) {
        return Object.assign({}, product, updatedProduct);
      } else {
        return product;
      }
    });

    this.setState({ products: updatedProducts });
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
            products={store.getState().products}
            onAddToCartClick={this.addToCart}
            onEditProduct={this.editProduct}
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
