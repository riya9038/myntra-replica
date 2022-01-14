import { createStore, applyMiddleware } from 'redux';
import thunk from 'react-thunk';
import reducer from '../reducer/index';

let store;

export function configureStore() {
    store = createStore(reducer, applyMiddleware(thunk));
    return store;
}