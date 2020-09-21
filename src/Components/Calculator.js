import React, { Component } from 'react';
import '../App.css';
import Grid from '@material-ui/core/Grid';
import FlexView from 'react-flexview';
import Button from './Button';
import CalcButton from './CalcButton';
import ClearButton from './ClearButton';

class Calculator extends Component {
    render() {
        return (
            <div className="calculator">

                <Button name="(">(</Button>
                <Button name=")">(</Button>
                <Button name="%">(</Button>
                <Button name="C">(</Button>
                <Button name="1">(</Button>
                <Button name="2">(</Button>
                <Button name="3">(</Button>
                <Button name="/">(</Button>
                <Button name="4">(</Button>
                <Button name="5">(</Button>
                <Button name="6">(</Button>
                <Button name="x">(</Button>
                <Button name="7">(</Button>
                <Button name="8">(</Button>
                <Button name="9">(</Button>
                <Button name="-">(</Button>
                <Button name="0">(</Button>
                <Button name=".">(</Button>
                <Button name="=">(</Button>
                <Button name="+">(</Button>

            </div>

        )
    }
}//end Calculator

export default Calculator;