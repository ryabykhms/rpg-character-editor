import { createStore, compose } from 'redux';
import { defaultState } from './defaultState';
import { rootReducer } from './rootReducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const AppStore = createStore(rootReducer, defaultState, composeEnhancers());

export * from './defaultState';
export * from './reducers';
export * from './actions';
