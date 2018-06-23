import React, { Component } from 'react';
import CartItem from './CartItem';

// Should have no knowledge of store - PRESENTATIONAL:
// only recieves cartItems prop:
// [  { id: 1, price: 79.99, quantity: 1, stock: 4,  title: "Amazon Kindle E-reader" }, {...} ]
// and handleCheckoutClick prop function

class Cart extends Component {
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

    let total = this.props.cartItems.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2);

    const itemsTable = (
      <table className="cart-items">
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {items}
          <tr>
            <td colSpan="3" className="total">
              Total: ${total}
            </td>
          </tr>
        </tbody>
      </table>
    );

    const noItemsTable = (
      <div>
        <p>Your cart is empty</p>
        <p>Total: $0</p>
      </div>
    );

    return (
      <div className='cart'>
        <h2>Your Cart</h2>
        {hasItems ? itemsTable : noItemsTable}
        <a
          className={`button checkout ${hasItems ? '' : 'disabled'}`}
          onClick={this.props.handleCheckoutClick}
        >Checkout</a>
      </div>
    )
  }
}

export default Cart;
