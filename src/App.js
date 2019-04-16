import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Page1 from './Page1'
import Page2 from './Page2'

import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <nav>
            <NavLink to="/">Page 1</NavLink>{' '}
            <NavLink to="/page2">Page 2</NavLink>{' '}
            <NavLink to={{
              pathname: "/page2",
              search: "?sort=name",
              hash: "#the-hash",
              state: { fromDashboard: true }
            }}>
              Page 2 w/ state
            </NavLink>
          </nav>
          <Route exact path="/" component={Page1} />
          <Route exact path="/page2" component={Page2} />
        </Router>
      </div>
    );
  }
}

export default App;
