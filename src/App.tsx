// Design Comments:
// + Header and Footer are universal
//   regardless of the current URL
// + Header and Footer combine when viewing
//   on a compact screen view.

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
// import './App.css';
import './sass/base.css';

import WebHeader from './components/core/WebHeader';
import WebHeaderFixed from './components/core/WebHeaderFixed';
import WebFooter from './components/core/WebFooter';

import WebMain from './components/views/WebMain';
import WebClaims from './components/views/WebClaims';
import WebTech from './components/views/WebTech';
import WebLogin from './components/views/WebLogin';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header> */}

          <WebHeader />
          <WebHeaderFixed />

          <Route exact path="/" component={WebMain} />
          <Route exact path="/technology" component={WebTech} />
          <Route exact path="/claims" component={WebClaims} />
          <Route exact path="/dashboard" component={WebLogin} />
        
          <WebFooter />
        </div>
      </Router>
    );
  }
}

export default App;
