import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';
import './App.css';
import Main from './Main.js';

class App extends Component {


  render() {
    return (
      <Router>
        <Main />
      </Router>
    );

  }
}

export default App;