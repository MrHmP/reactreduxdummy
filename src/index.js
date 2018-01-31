import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import allRoutes from "./routes";
import configureStore from "./store/configureStore";
import {Provider} from "react-redux";

const store = configureStore();

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={allRoutes} />
    </Provider>,
    document.getElementById('mainApp'));
