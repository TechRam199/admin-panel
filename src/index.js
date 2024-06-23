import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import {store , persistor} from './Redux/Store';
import { PersistGate } from 'redux-persist/integration/react'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <HashRouter>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <App/>
    </PersistGate>
    </Provider>
    </HashRouter>
 
);

