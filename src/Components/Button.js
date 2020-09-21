import React, { Component } from 'react';
import '../App.css';

class Button extends Component {


    render() {
        return (
            <button>{this.props.name}</button>
            )
    }
}//end Button

export default Button;