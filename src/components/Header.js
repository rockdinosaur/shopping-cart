import React, { Component } from 'react';
import CartContainer from './CartContainer';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>The Shop!</h1>
        <CartContainer />
      </header>
    )
  }
}

export default Header;
