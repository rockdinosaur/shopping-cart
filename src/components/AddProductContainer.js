import ProductForm from './ProductForm';

// -----##### Version 1 ######----- //

// import React, { Component } from 'react';
// import store from '../store';

// class AddProductContainer extends Component {
//   handleAddNewProduct = (productData) => {
//     const addAction = {
//       type: 'ADD_PRODUCT',
//       productData: productData,
//     }
//     store.dispatch(addAction);
//   }

//   render() {
//     return (
//       <ProductForm
//         mode='add'
//         handleAddNewProduct={this.handleAddNewProduct}
//       />
//     );
//   }
// }

// export default AddProductContainer;

// -----##### Version 2 ######----- //

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    mode: 'add'
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddNewProduct: (productData) => {
      dispatch({
        type: 'ADD_PRODUCT',
        productData: productData,
      });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);