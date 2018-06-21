import React from 'react';
import ReactDOM from 'react-dom';
import Shop from '../components/Shop';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Shop />, div);
  ReactDOM.unmountComponentAtNode(div);
});
