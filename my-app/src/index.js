import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { IndexRoute, Router, Route, Link, hashHistory } from 'react-router';

import './css/index.css';
import ProjectsPage from './ProjectsPage';
import InfoPage from './InfoPage';
import LandingPage from './LandingPage';

// Render DOM -- wrapper in MuiThemeProvider for material-ui elements
ReactDOM.render(
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute className="button" component={LandingPage}/>
                <Route className="button" path="projects" component={ProjectsPage}/>
                <Route className="button" path="info" component={InfoPage}/>
            </Route>
        </Router>,
  document.getElementById('root')
);
