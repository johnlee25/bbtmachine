import React, { Component } from 'react';
import './Pricing.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
import logo from './pricinglogo.png';
import pricing from './prices.png';

class Pricing extends Component {


    render() {
        return (
            <div class="pricing">
                <Row>
                    <Col><div class="imgEdit"><img src={logo} alt="Bubble Me Up Logo" class="logo" rounded /></div></Col>
                </Row>
                <Row>
                    <Col xs="3"></Col>
                    <Col>
                        <div class="pricing-intro">
                            When shopping with Bubble Me Up, we ensure the most competive pricing on all our drinks. All our ingredients are freshly stocked daily and cleaned on a regular basis. Our cups
                            are 100% made from recyclable plastic. Straws are provided on the side of our machines but we ask users to consider bringing their own resuable straws to help the environment.
                        </div>
                        <div class="prices">
                            <div class="priceimg"><img src={pricing} alt="Bubble Me Up Logo" class="price" /></div>
                        </div>
                    </Col>
                    <Col xs="3"></Col>
                </Row>



            </div>
        );
    }
}

export default Pricing;