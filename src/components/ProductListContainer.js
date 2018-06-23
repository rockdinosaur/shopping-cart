import ProductList from './ProductList';

// -----##### Version 1 ######----- //

// import React, { Component } from 'react';
// import store from '../store';

// class ProductListContainer extends Component {
//   handleAddToCart = (productId) => {
//     const addToCartAction = {
//       type: 'ADD_TO_CART',
//       id: productId
//     }
//     store.dispatch(addToCartAction);
//   }

//   handleDeleteProduct = (productId) => {
//     store.dispatch({
//       type: "DELETE_PRODUCT",
//       id: productId
//     });
//   }

//   handleEditProduct = (productData, productId) => {
//     const editAction = {
//       type: 'EDIT_PRODUCT',
//       productData: productData,
//       id: productId
//     }
//     store.dispatch(editAction);
//   }

//   render() {
//     return (
//       <ProductList
//         products={store.getState().products}
//         handleAddToCart={this.handleAddToCart}
//         handleDeleteProduct={this.handleDeleteProduct}
//         handleEditProduct={this.handleEditProduct}
//       />
//     );
//   }
// }

// export default ProductListContainer;

// -----##### Version 2 ######----- //

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    products: state.products
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddToCart: (productId) => {
      dispatch({
        type: 'ADD_TO_CART',
        id: productId
      });
    },
    handleDeleteProduct: (productId) => {
      dispatch({
        type: "DELETE_PRODUCT",
        id: productId
      });
    },
    handleEditProduct: (productData, productId) => {
      dispatch({
        type: 'EDIT_PRODUCT',
        productData: productData,
        id: productId
      });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);