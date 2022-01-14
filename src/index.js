import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './responsive.css';
import App from './components/App';
import reducer from './reducer/index';
import { createStore, applyMiddleware } from 'redux';
import { configureStore } from './store/index';
// import {thunk} from 'react-thunk'
import { Provider } from 'react-redux';

// const store=configureStore();
// console.log("store", store);
const store= createStore(reducer);

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
      <App />
      </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);

