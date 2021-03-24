import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';
import './App.css';
import Main from './Main.js';
import Pricing from './Pricing.js';
import About from './About.js';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {


  render() {
    return (
      <Router>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand as={Link} to="/">Bubble Me Up</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Order</Nav.Link>
            <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>
        </Navbar>

        <Route exact path="/" component={Main} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/about" component={About} />
      </Router>
    );

  }
}

export default App;