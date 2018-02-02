import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import allRoutes from "./routes";
import configureStore from "./store/configureStore";
import {Provider} from "react-redux";
import {loadRepos} from "./actions/reposActions";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../styles.css';

const store = configureStore();
store.dispatch(loadRepos());

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={allRoutes} />
    </Provider>,
    document.getElementById('mainApp'));
