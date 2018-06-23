import React, { Component } from 'react';
import Cart from './Cart';
import store from '../store';

class CartContainer extends Component {
  handleCheckoutClick = () => {
    const checkoutAction = {
      type: 'CHECKOUT'
    }
    store.getState().cart.length && store.dispatch(checkoutAction);
  }

  render() {
    const itemsWithData = store.getState().cart.map(item => {
      const match = store.getState().products.find(product => product.id === item.id);
      return Object.assign(match, item);
    });

    return (
      <Cart
        cartItems={itemsWithData}
        handleCheckoutClick={this.handleCheckoutClick}
      />
    );
  }
}

export default CartContainer;