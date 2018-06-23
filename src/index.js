import React from 'react';
import ReactDOM from 'react-dom';
import Shop from './components/Shop';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Shop />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
