import React, { Component } from 'react';
import './About.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
import logo from './aboutlogo.png';

class About extends Component {


    render() {
        return (
            <div class="home">
                <Row>
                    <Col><div class="imgEdit"><img src={logo} alt="Bubble Me Up Logo" class="logo" rounded /></div></Col>
                </Row>
                <Row>
                    <Col xs="3"></Col>
                    <Col>
                        <div class="intro">
                            Welcome to Bubble Me Up! Bubble Me Up is a fully self serving bubble tea machine that allows a user to place an order straight from their selected browser. 
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
        );
    }
}

export default About;