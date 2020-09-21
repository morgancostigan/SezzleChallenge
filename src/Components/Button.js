import React, { Component } from 'react';
import '../App.css';


class Button extends Component {
    render() {
        return (
        <button onClick={e => this.props.onClick(e.target.name)}>{this.props.name}</button>
        )
    }
}//end Button

export default Button;