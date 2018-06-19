import React, { Component } from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>The Shop!</h1>
        <div className='cart'>
          <h2>Your Cart</h2>
          <table class="cart-items">
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
            <tr>
              <td>Amazon Kindle E-reader</td>
              <td>2</td>
              <td>$79.99</td>
            </tr>
            <tr>
              <td>Apple 10.5-Inch iPad Pro</td>
              <td>1</td>
              <td>$649.99</td>
            </tr>

            <tr>
              <td colspan="3" class="total">Total: $729.98</td>
            </tr>
          </table>
        </div>
      </header>
    )
  }
}

export default Header;
