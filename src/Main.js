import React, { Component } from 'react';
import './Main.css';
import ToggleButton from 'react-toggle-button';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { ledOn: false };
    }

    setLedState(state) {
        console.log(this.state.ledOn);

        this.setState(
            {
                ledOn: !this.state.ledOn
            }
        )
        console.log(this.state.ledOn);
    }

    componentDidMount() {
        console.log("run");
        fetch('/led')
            .then(response => response.text())
            .then(state => this.setLedState(state));
    }

    handleStateChange(ledOn) {
        fetch('/led', { method: 'PUT', body: ledOn ? '0' : '1' })
            .then(response => response.text())
            .then(state => this.setLedState(state));
    }

    render() {
        return (
            <div class="main-body">
                <div class="content">
                    <Form>
                        <div class="size">
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
                            <input type="submit" value="Submit" class="submit-btn" />
                        </div>
                    </Form>
                </div>
                {/* <ToggleButton
                    value={this.state.ledOn}
                    onToggle={value => this.handleStateChange(value)}
                /> */}
            </div >

        );
    }
}

export default Main;