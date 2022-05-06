import React from 'react';
import App from './App';
import "./variables.scss";
import {BrowserRouter} from "react-router-dom"
import {store} from "redux/store";
import {Provider} from "react-redux";
import {createRoot} from 'react-dom/client';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
);