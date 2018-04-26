import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'
import { store } from './store.js'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

console.log('Redux store state: ', store.getState());
ReactDOM.render((
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
), document.getElementById('root')
);
registerServiceWorker();
