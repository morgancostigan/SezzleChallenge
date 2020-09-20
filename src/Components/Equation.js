import React, { Component } from 'react'



class ClearButton extends Component {
    render() {

        let equation = this.props.equation;

        return (
            <p>
                {this.props.equation}
            </p>
        )
    }
}//end ClearButton

export default ClearButton;