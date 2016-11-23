import React from 'react';
import './css/App.css';
import { Link } from 'react-router';
// import '../node_modules/font-awesome/css/font-awesome.css'

var App = React.createClass({
	render() {
		// Return links and show anything inside the <App> component (children)
		return (
      <div className="App">
        <h1>Soojin's Portfolio</h1>
        <div className = "navbar">
          <Link className="link navButton" activeClassName='active' to="/">Home</Link>
          <Link className="link navButton" activeClassName='active' to="/projects">Projects</Link>
          <Link className="link navButton" activeClassName='active' to="/info">About Me</Link>
        </div>
        <div className="children">
          {this.props.children}
        </div>
      </div>
		);
	}
});

export default App;
