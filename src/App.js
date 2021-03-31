import React, { Component } from 'react';
import './Main.css';
import './Pricing.css';
import './About.css';
import ToggleButton from 'react-toggle-button';
import { Form, Col, Row, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import pricing from './prices.jpg';
import top from './aboutlogo.png';
// import bot from './pricinglogo.png';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { ledOn: false };
  }

  setLedState(state) {
    this.setState(
      {
        ledOn: !this.state.ledOn
      }
    )
  }



  // componentDidMount() {
  //   fetch('/led')
  //     .then(response => response.text())
  //     .then(state => this.setLedState(state));
  // }

  handleStateChange(ledOn) {
    fetch('/led', { method: 'PUT', body: ledOn ? '0' : '1' })
      .then(response => response.text())
      .then(state => this.setLedState(state));
  }

  render() {
    return (
      <div class="main-body">

        <Navbar bg="dark" variant="dark">
          <Navbar.Brand >Bubble Me Up</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link to="/#order">Order</Nav.Link>
            <Nav.Link to="/#price">Pricing</Nav.Link>
            <Nav.Link to="/#about">About</Nav.Link>
          </Nav>
        </Navbar>

        <div class="content">
          <div class="topimg"><img src={top} alt="Bubble Me Up Logo" class="top" /></div>
          <Form>
            <div class="size" id="order">
              <Form.Label>Cup Size</Form.Label>
              <Form.Control as="select" custom>
                <option selected >Select Cup Size</option>
                <option >Small</option>
                <option >Medium</option>
                <option >Large</option>
              </Form.Control>
            </div>
            <div class="ice">
              <Form.Label>Ice Level</Form.Label>
              <Form.Control as="select" custom>
                <option selected value="select-ice">Select Ice Levels</option>
                <option value="100%">100%</option>
                <option value="75%">75%</option>
                <option value="50%">50%</option>
                <option value="25%">25%</option>
                <option value="0%">0%</option>
              </Form.Control>
            </div>
            <div class="sugar">
              <Form.Label>Sugar Level</Form.Label>
              <Form.Control as="select" custom>
                <option selected value="select-sugar">Select Sugar Levels</option>
                <option value="100%">100%</option>
                <option value="75%">75%</option>
                <option value="50%">50%</option>
                <option value="25%">25%</option>
                <option value="0%">0%</option>
              </Form.Control>
            </div>
            <div class="tea">
              <Form.Label>Tea Type</Form.Label>
              <Form.Control as="select" custom>
                <option selected value="select-sugar">Select Tea</option>
                <option value="earl gray">Earl Gray</option>
                <option value="black">Black</option>
                <option value="green">Green</option>
                <option value="Jasmine">Jasmine</option>
              </Form.Control>
            </div>
            <div class="toppings">
              <Form.Label>Topping Choice</Form.Label>
              <Form.Control as="select" custom>
                <option selected value="select-topping1">Select Topping</option>
                <option value="Tapicoa">Tapicoa</option>
                <option value="Grass Jelly">Grass Jelly</option>
                <option value="Lychee Balls">Lychee Balls</option>
                <option value="Pudding">Pudding</option>
              </Form.Control>
            </div>
            <div class="submitbtn">
              <input type="button" value="Submit" class="submit-btn" />
            </div>
          </Form>
        </div>
        <ToggleButton
          value={this.state.ledOn}
          onToggle={value => this.handleStateChange(value)}
        />
        <div class="pricing">
          <Row>
            <Col xs="3"></Col>
            <Col>
            {/* <div class="botimg"><img src={bot} alt="Bubble Me Up Logo" class="bot" /></div> */}
              <div class="pricing-intro" id="price">
                Welcome to Bubble Me Up! When shopping with Bubble Me Up, we ensure the most competive pricing on all our drinks. All our ingredients are freshly stocked daily and cleaned on a regular basis. Our cups
                are 100% made from recyclable plastic. Straws are provided on the side of our machines but we ask users to consider bringing their own resuable straws to help the environment.
                        </div>
              <div class="prices">
                <div class="priceimg"><img src={pricing} alt="Bubble Me Up Logo" class="price" /></div>
              </div>
            </Col>
            <Col xs="3"></Col>
          </Row>
        </div>
        <div class="home">
          <Row>
            <Col xs="3"></Col>
            <Col>
              <div class="intro" id="about">
                Bubble Me Up is a fully self serving bubble tea machine that allows a user to place an order straight from their selected browser.
                Simply navigate to our website, select your drink choices and watch as our machine deliver you the perfect contactless experience.
                        </div>
            </Col>
            <Col xs="3"></Col>
          </Row>
          <Row>
            <Col xs="2"></Col>
            <Col>
              <h2>Ordering</h2>
              <div>
                The user is able to place an order for their desired drink. They have the option to select which cup size they want, ice levels, and we can't forget about the toppings
                To stay health conscious, the user can also select a variety of sugar levels for their drink. Which tea they want to pair their drink with is also customizable with our selections being
                Earl Gray, Jasmine, Black and Green.
                        </div>
            </Col>
            <Col xs="2"></Col>
            <Col>
              <h2>The Team</h2>
              <div>
                This machine was created by the McMaster 4OI6 group D20 team. Our backgrounds vary from Electrical Engineering, Computer Engineering and Software Engineering. It wasn't easy
                getting everything together during COVID-19 times but the team persevered and came through.
                        </div>
            </Col>
            <Col xs="2"></Col>
          </Row>
        </div>
        <footer>
          <div class="foot">
            Capstone 2021 Group D20
          </div>
        </footer>
      </div >

    );
  }
}

export default App;