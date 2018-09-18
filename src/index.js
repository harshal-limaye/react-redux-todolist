import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

const root = document.querySelector('#root');

const template = (
    <App />
)

ReactDOM.render( template, root );
