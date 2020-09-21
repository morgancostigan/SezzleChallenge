import React, { Component } from 'react'


class Equation extends Component{
    render(){
        let displayEquation = this.props.equation;
        console.log('props', this.props.equation);

        return (
            <p>
                {displayEquation}
            </p>
        )
    }
    
}//end Equation

export default Equation;