import React, { Component } from 'react';
import '../App.css';
import FlexView from 'react-flexview';
import Button from './Button';
import CalcButton from './CalcButton';
import ClearButton from './ClearButton';

class Calculator extends Component {
    render() {
        return (
            <FlexView >
                <button name="(">(</button>
                <button name=")">)</button>
                <button name="%">%</button>
                <button name="C">C</button>
                <button name="1">1</button>
                <button name="2">2</button>
                <button name="3">3</button>
                <button name="/">/</button>
                <button name="4">4</button>
                <button name="5">5</button>
                <button name="6">6</button>
                <button name="x">x</button>
                <button name="7">7</button>
                <button name="8">8</button>
                <button name="9">9</button>
                <button name="-">-</button>
                <button name="0">0</button>
                <button name=".">.</button>
                <button name="=">=</button>
                <button name="+">+</button>
            </FlexView>
        )
    }
}//end Calculator

export default Calculator;