import React, { Component } from 'react';

class Cart extends React.Component {
  
  render() {
    let items = this.props.cartItems.map((item) {
      return (
        <tr>
          <td>{item.title}</td>
          <td>{item.quantity}</td>
          <td>{item.price}</td>
        </tr>                  
      )
    });
    if (this.props.cartItems.length > 0) {
      return (
          <div className='cart'>
            <table class="cart-items">
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
              {items}
              <tr>
                <td colspan="3" class="total">Total: ${this.props.cartItems.reduce((total, item) total + item.price, 0)}</td>
              </tr>
            </table>
          </div>
      )      
    } else {
      return (
        <div className='cart'>
          <h2>Your Cart</h2>
          <p>Your cart is empty</p>
          <p>Total: $0</p>
          <a class="button checkout disabled">Checkout</a>
        </div>
      )
    }
  }
}

export default Cart;