import { createStore, combineReducers } from 'redux';
import seedData from './seedData';
import uuid from 'uuid';

const reducer = combineReducers({
  // cart:
  products: productsReducer,
})

function productsReducer(products = [], action) { // action: id, type, productData
  if (action.type === 'ADD_PRODUCT') {
    const product = {...action.productData};
    product.id = uuid.v4();
    const updatedProducts = products.concat(product);
    return updatedProducts;
  } else if (action.type === 'DELETE_PRODUCT') {
    const idxToDelete = products.findIndex(product => product.id === action.id)
    const updatedProducts = [...products.slice(0, idxToDelete)].concat(
                            [...products.slice(idxToDelete + 1)]
    )
    return updatedProducts;
  } else {
    return products;
  }
}

const initialState = {
  cart: [],
  products: seedData,
};

const store = createStore(reducer, initialState);

export default store;
