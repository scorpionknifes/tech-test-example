import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from './Context';

// Provider for React Context
ReactDOM.render(
    <Provider>
        <App />
    </Provider>, document.getElementById('root'));
