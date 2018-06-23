import React, { Component } from 'react';

class CartItem extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.title}</td>
        <td>{this.props.quantity}</td>
        <td>{this.props.price}</td>
      </tr>
    )
  }
}

export default CartItem;