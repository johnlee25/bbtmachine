
import React, { Component } from 'react';
import './Main.css';

class Main extends Component {
    render() {
        return (
            <div class="main-body">
                <div class="title">
                    <h1>Bubble Me Up</h1>
                </div>
                <div class="content">
                    <form>
                        <div class="size">
                            <label>
                                SIZE
                                <br />
                                <select>
                                    <option selected value="select-size">Select Cup Size</option>
                                    <option value="Small">Small</option>
                                    <option value="">Medium</option>
                                    <option value="Large">Large</option>
                                </select>
                            </label>
                        </div>
                        <div class="ice">
                            <label>
                                ICE LEVEL
                                <br />
                                <select>
                                    <option selected value="select-ice">Select Ice Levels</option>
                                    <option value="100%">100%</option>
                                    <option value="75%">75%</option>
                                    <option value="50%">50%</option>
                                    <option value="25%">25%</option>
                                    <option value="0%">0%</option>
                                </select>
                            </label>
                        </div>
                        <div class="toppings1">
                            <label>
                                Topping #1
                                <br />
                                <select>
                                    <option selected value="select-topping1">Select First Topping</option>
                                    <option value="Tapicoa">Tapicoa</option>
                                    <option value="Grass Jelly">Grass Jelly</option>
                                    <option value="Lychee Balls">Lychee Balls</option>
                                    <option value="Pudding">Pudding</option>
                                </select>
                            </label>
                        </div>
                        <div class="toppings2">
                            <label>
                                Topping #2
                                <br />
                                <select>
                                    <option selected value="select-topping2">Select Second Topping</option>
                                    <option value="Tapicoa">Tapicoa</option>
                                    <option value="Grass Jelly">Grass Jelly</option>
                                    <option value="Lychee Balls">Lychee Balls</option>
                                    <option value="Pudding">Pudding</option>
                                </select>
                            </label>
                        </div>
                        <div class="toppings3">
                            <label>
                                Topping #3
                                <br />
                                <select>
                                    <option selected value="select-topping3">Select Third Topping</option>
                                    <option value="Tapicoa">Tapicoa</option>
                                    <option value="Grass Jelly">Grass Jelly</option>
                                    <option value="Lychee Balls">Lychee Balls</option>
                                    <option value="Pudding">Pudding</option>
                                </select>
                            </label>
                        </div>
                        <div class="sugar">
                            <label>
                                Sugar Level
                                <br />
                                <select>
                                    <option selected value="select-sugar">Select Sugar Levels</option>
                                    <option value="100%">100%</option>
                                    <option value="75%">75%</option>
                                    <option value="50%">50%</option>
                                    <option value="25%">25%</option>
                                    <option value="0%">0%</option>
                                </select>
                            </label>
                        </div>
                        <div class="tea">
                            <label>
                                Tea Level
                                <br />
                                <select>
                                    <option selected value="select-sugar">Select Tea</option>
                                    <option value="earl gray">Earl Gray</option>
                                    <option value="black">Black</option>
                                    <option value="green">Green</option>
                                    <option value="Jasmine">Jasmine</option>
                                </select>
                            </label>
                        </div>
                        <div class="submitbtn">
                            <input type="submit" value="Submit" class="submit-btn" />
                        </div>
                    </form>
                </div>

                <footer>
                    <div class="foot">
                        <div class="foot-text">
                            Engineering 40I6 Capstone Group D20
                        </div>
                    </div>
                </footer>
            </div>

        );
    }
}

export default Main;