import React, {Component} from 'react';
import './App.css';
import api from './api';
import Calculator from './Components/Calculator';
import Equation from './Components/Equation';
import Calculation from './Components/Calculation';

class App extends Component {
  componentDidMount(){
    //import previous calculations and set to state
    this.getPrevCalcs();
  }

  state = {
    id: "5f6bbd9e7eb1228021b285c0",
    answer: "",
    equation: "",
    calculations: []
  }

  getPrevCalcs = async () => {
    // console.log('this.state.id:', this.state.id);
    const prevCalcs = await api.getCalc(this.state.id)
      this.setState({
        calculations: prevCalcs.data.data.calcs
      })
    // console.log('calcs:', prevCalcs.data.data.calcs);
  }//end getPrevCalcs

  clearEquation() {
    this.setState({
      equation: "",
      answer: ""
    })
  };//end clearEquation

  updateEquationBack() {
    if (!this.state.answer) {
      this.setState({
        equation: this.state.equation.slice(0, -1)
      })
    } else {
      this.setState({
        equation: JSON.stringify(this.state.answer).slice(0, -1),
        answer: ""
      })
    }
  };//end updateEquationBack

  updateEquation(buttonName){
    if(!this.state.answer){
      this.setState({
        equation: this.state.equation + buttonName
      })
    } else {
      this.setState({
        equation: JSON.stringify(this.state.answer) + buttonName,
        answer: ""
      })
    }
  };//end updateEquation

  runEquation(){
    let solution = eval(this.state.equation);
    this.setState({
      answer: solution,
    })
    this.setCalc(solution)
    // console.log('state:', this.state);
  }//end runEquation

  setCalc(solution){ 
    if(this.state.calculations.length == 10){
      this.setState({
        calculations: [`${this.state.equation}=${solution}`].concat(this.state.calculations.slice(0, -1)),
      })
    } else {
      this.setState({
        calculations: [`${this.state.equation}=${solution}`].concat(this.state.calculations)
      })
    }
  }//end setCalc

  handleClick = buttonName => {
    // console.log(buttonName);
    if(buttonName === "C"){
      this.clearEquation()
    } else if(buttonName === "CE"){
      this.updateEquationBack()
    } else if (buttonName === "=") {
      this.runEquation()
    } else {
      this.updateEquation(buttonName)
    }
  }//end handleClick

  render() {
    return (
      <div className="App">
        <Calculator onClick={this.handleClick}/>
        <Equation equation={this.state.equation} answer={this.state.answer}/>
        <Calculation calcs={this.state.calculations}/>

      </div>
    );
  }
}

export default App;
