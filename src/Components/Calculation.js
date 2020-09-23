import React, { Component } from 'react'

class Calculation extends Component {
    render() {
        return (
            <div>
                {this.props.calcs.map((calc, index) => (
                    <p key={index}>{calc}</p>
                ))}
            </div>
        )
    }
}//end Calculation

export default Calculation;