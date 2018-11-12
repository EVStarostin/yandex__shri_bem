import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducer } from './store/reducers';
import './index.css';

const store = createStore(reducer, applyMiddleware(thunk));

const isTouchDevice = () => 'ontouchstart' in window || navigator.maxTouchPoints;

const requireAppDesktop = () => require('./components/App/App@desktop').AppDesktop();
const requireAppTouch = () => require('./components/App/App@touch').AppTouch();

ReactDOM.render(
  <Provider store={store}>
    {isTouchDevice() ? requireAppTouch() : requireAppDesktop()}
  </Provider>,
  document.getElementById('root')
);
