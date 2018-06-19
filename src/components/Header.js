import React, { Component } from 'react';
import Cart from './Cart';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>The Shop!</h1>
        <Cart 
          cartItems={this.props.cartItems}
        />
      </header>
    )
  }
}

export default Header;
