import React, { Component } from 'react'


class Equation extends Component{
    render(){
        let displayEquation = this.props.equation;
        let displayAnswer = this.props.answer;
        let display;
        console.log('props', this.props.equation);

        //this headache right here is where I learned about primitives
        if(typeof displayAnswer !== "number" ){
            display = displayEquation
        } else {
            display = displayAnswer
        }//end IF
     
        return (
            <p>
                {display}
            </p>
        )
    }
    
}//end Equation

export default Equation;