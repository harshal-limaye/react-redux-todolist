import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import appReducers from './reducers/index';
import { getState, setState } from './localStorage';
import './index.css';

const store = createStore(appReducers, getState());

store.subscribe(() => setState({ todos: store.getState().todos }));

const template = <Provider store={store}><App /></Provider>;

render( template, document.querySelector('#root') );
