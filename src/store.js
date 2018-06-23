import { createStore, combineReducers } from 'redux';
import seedData from './seedData';
import uuid from 'uuid';

function cartReducer(cart = [], action) {
  if (action.type === 'ADD_TO_CART') {
    if (cart.find(product => product.id === action.id)) {
      return cart.map(product => {
        if (product.id === action.id) {
          return { ...product, quantity: product.quantity + 1 };
        } else {
          return product;
        }
      });
    } else {
      return cart.concat({ quantity: 1, id: action.id });
    }
  } else if (action.type === 'CHECKOUT') {
    return [];
  } else if (action.type === 'DELETE_PRODUCT') {
    return cart.filter(product => product.id !== action.id);
  } else {
    return cart;
  }
}

function productsReducer(products = [], action) { // action: id, type, productData
  if (action.type === 'ADD_PRODUCT') {
    const product = { ...action.productData };
    product.id = uuid.v4();
    const updatedProducts = products.concat(product);
    return updatedProducts;
  } else if (action.type === 'DELETE_PRODUCT') {
    return products.filter(product => product.id !== action.id);
  } else if (action.type === 'EDIT_PRODUCT') {
    return products.map(product => {
      if (product.id === action.id) {
        return Object.assign(product, action.productData);
      } else {
        return product;
      }
    })
  } else if (action.type === 'ADD_TO_CART') {
    return products.map(product => {
      if (product.id === action.id) {
        return Object.assign(product, { stock: product.stock - 1 });
      } else {
        return product;
      }
    })
  } else {
    return products;
  }
}

const reducer = combineReducers({
  cart: cartReducer,
  products: productsReducer
})

const initialState = {
  cart: [],
  products: seedData,
};

const store = createStore(reducer, initialState);

export default store;
