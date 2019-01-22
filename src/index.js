import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Page from './components/Page';
import './css/style.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(/*allReducers,*/ window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <Page />
  </Provider>, 
  document.getElementById('root'));
serviceWorker.unregister();