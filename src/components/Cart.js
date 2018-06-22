import React, { Component } from 'react';
import store from '../store';

class Cart extends Component {
  handleCheckoutClick = () => {
    const checkoutAction = {
      type: 'CHECKOUT'
    }
    this.props.cartItems.length && store.dispatch(checkoutAction);
    //this.props.cartItems.length && this.props.handleCheckoutClick();
  }

  render() {
    const itemsWithData = store.getState().cart.map(item => {
      const match = store.getState().products.filter(product => {
        return product.id === item.id;
      })[0];

      return Object.assign(match, item);
    });

    const items = itemsWithData.map(item => {
      return (
        <CartItem
          key={'key-' + item.id}
          title={item.title}
          quantity={item.quantity}
          price={item.price}
        />
      )
    });

    const hasItems = store.getState().cart.length > 0;

    let total = itemsWithData
      .reduce((total, item) => {
        return total + item.quantity * item.price
      }, 0);
    total = total.toFixed(2);

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
