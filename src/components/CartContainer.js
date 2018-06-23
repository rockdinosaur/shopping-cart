import Cart from './Cart';

// -----##### Version 1 ######----- //

// import React, { Component } from 'react';
// import store from '../store';

// class CartContainer extends Component {
//   handleCheckoutClick = () => {
//     const checkoutAction = {
//       type: 'CHECKOUT'
//     }
//     store.dispatch(checkoutAction);
//   }

//   render() {
//     const itemsWithData = store.getState().cart.map(item => {
//       const match = store.getState().products.find(product => product.id === item.id);
//       return Object.assign(match, item);
//     });

//     return (
//       <Cart
//         cartItems={itemsWithData}
//         handleCheckoutClick={this.handleCheckoutClick}
//       />
//     );
//   }
// }

// export default CartContainer;

// -----##### Version 2 ######----- //

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const itemsWithData = state.cart.map(item => {
    const match = state.products.find(product => product.id === item.id);
    return Object.assign(match, item);
  });

  return {
    cartItems: itemsWithData
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleCheckoutClick: () => {
      dispatch({
        type: 'CHECKOUT'
      });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);