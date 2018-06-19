import React, { Component } from 'react';

class Cart extends React.Component {
  handleCheckoutClick = () => {
    this.props.handleCheckoutClick();
  }

  render() {
    const items = this.props.cartItems.map(item => {
      return (
        <CartItem
          key={'key-' + item.id}
          title={item.title}
          quantity={item.quantity}
          price={item.price}
        />
      )
    });

    const hasItems = this.props.cartItems.length > 0;
    const itemsTable = (
      <div>
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </div>
    );
    let total = this.props
                .cartItems
                .reduce((total, item) => {
                  return total + item.quantity * item.price
                }, 0);
    total = total.toFixed(2);

    return (
        <div className='cart'>
          <h2>Your Cart</h2>
          <table class="cart-items">
            {hasItems ? itemsTable : (<p>Your cart is empty</p>)}
            <tr>
              <td colspan="3" class="total">
                Total: ${total}
              </td>
            </tr>
          </table>
          <a
            className={`button checkout ${hasItems ? '' : 'disabled'}`}
            onClick={this.handleCheckoutClick}
          >Checkout</a>
        </div>
      )
  }
}

class CartItem extends React.Component {
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

export default Cart;
