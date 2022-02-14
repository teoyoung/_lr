import React, { useState } from 'react';
import { Provider } from 'react-redux';
import ReactDom from 'react-dom';
import App from './App';
import {Store} from './Store';

ReactDom.render(
    <Provider store={Store}>
        <App />
    </Provider>,
    document.getElementById('root')
);