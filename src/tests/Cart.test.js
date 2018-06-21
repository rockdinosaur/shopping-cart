import React from 'react';
import ReactDOM from 'react-dom';
import Cart from '../components/Cart';
import CartItem from '../components/Cart';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

describe('Cart', () => {
  let cart;

  beforeEach(() => {
    cart = shallow(
      <Cart 
        cartItems={[]}
      />
    );   
  });

  it('should have a checkout button', () => {
    expect(
      cart.containsMatchingElement(
        <a>Checkout</a>
      )
    ).toBe(true);
  });

  describe('an empty cart', () => {

     it('should have total 0', () => {
      expect(cart.find('.cart').containsMatchingElement(<p>Total: $0</p>)).toBe(true);
    }); 

     it('should have disabled checkout button', () => {
      expect(cart.find('.button').hasClass('disabled')).toBe(true);
    }); 
  });
});

describe('a cart with items', () => {
  let cart;

  beforeEach(() => {
    cart = mount(
      <Cart
        cartItems={[
          {
            id: 1,
            title: 'Amazon Kindle E-reader',
            quantity: 5,
            price: 79.99
          },
          {
            id: 2,
            title: 'Apple 10.5-Inch iPad Pro',
            quantity: 3,
            price: 649.99
          }          
        ]}
      />
    );   
  });

   it('should have two items in cartItems prop', () => {
    expect(cart.props().cartItems.length).toEqual(2);
  });

  //  it('should have a cart-items table', () => {
  //   expect(cart.containsMatchingElement(<table class='cart-items'></table>)).toBe(true);
  // });  

   it('should have enabled checkout button', () => {
    expect(cart.find('.button').hasClass('disabled')).toBe(false);
  });   
});
