import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AboutHomePage from "./components/about/AboutHomePage";
import HomePage from "./components/home/HomePage";
import App from "./components/App";

// render (
//     <Router history={browserHistory}
//         route={route}
//     />,
//     document.getElementById('mainApp')
// );
render(
    <Router history={browserHistory} >
      <div>
        <Route path="/" component={App}>
            <IndexRoute component={HomePage}/>
            <Route path="about" component={AboutHomePage}/>
        </Route>
      </div>
    </Router>,
    document.getElementById('mainApp'));
