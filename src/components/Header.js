import React, { Component } from 'react';
import Cart from './Cart';

class Header extends Component {
  handleCheckoutClick = () => {
    this.props.handleCheckoutClick;
  }

  render() {
    return (
      <header>
        <h1>The Shop!</h1>
        <Cart
          cartItems={this.props.cartItems}
          handleCheckoutClick={this.props.handleCheckoutClick}
        />
      </header>
    )
  }
}

export default Header;
