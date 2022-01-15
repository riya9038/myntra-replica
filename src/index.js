import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/responsive.css';
import App from './components/App';
import reducer from './reducer/index';
import { createStore, applyMiddleware } from 'redux';
import { configureStore } from './store/index';
// import {thunk} from 'react-thunk'
import { Provider } from 'react-redux';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// const store=configureStore();
// console.log("store", store);
const store= createStore(reducer);

ReactDOM.render(
    <React.StrictMode>
      <ToastContainer autoClose={5000}  />
      <Provider store={store}>
      <App />
      </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);

