import React, { Component } from 'react';
import '../App.css';


class Button extends Component {
    render() {
        return (
            // <div>
                <button onClick={e => this.props.onClick(e.target.name)}></button>
            // </div>
        )
    }
}//end Button

export default Button;