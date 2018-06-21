import React from 'react';
import ReactDOM from 'react-dom';
import Product from '../components/Product';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Product />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Products', () => {
  let product;

  beforeEach(() => {
    product = shallow(
      <Product />
    );   
  });

  it('should have an edit button', () => {
    expect(
      product.containsMatchingElement(
        <a className="button edit">Edit</a>
      )
    ).toBe(true);
  });

  describe('a product with 0 quantity', () => {
    beforeEach(() => {
      product.setState({ quantity: 0 });
    })

     it('should have quantity 0', () => {
      expect(product.state('quantity')).toBe(0);
    }); 

     it('should have class diabled', () => {
      expect(product.find('.add-to-cart').hasClass('disabled')).toBe(true);
    });    
  });
});