import { legacy_createStore, combineReducers, compose } from 'redux';
import productsListReducer from '../reducers/productsListReducer';

const ReactreduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

function configureStore() {
  return legacy_createStore(
    combineReducers({
      productsList: productsListReducer
    }),
    undefined,
    compose(
      ReactreduxDevTools,
    )
  )
}

export default configureStore;

