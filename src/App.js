import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './Components/Calculator';
import Equation from './Components/Equation';

class App extends Component {
  componentDidMount(){
    //import previous calculations and set to state
  }

  state = {
    answer: "",
    tempEquation: "",
    equation: "pine forest",
    calculation: "",
    calculations: []
  }

  clearEquation() {
    this.setState({
      equation: "",
      answer: ""
    })
  };//end clearEquation

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
    console.log('state:', this.state);
  }//end runEquation

  // componentDidUpdate(prevProps) {
  //   // Typical usage (don't forget to compare props):
  //   if (this.state.answer !== prevProps.answer) {
  //     // this.setState({
  //     //   calculations: [`${this.state.equation}=${this.state.answer}`].concat(this.state.calculations)
  //     // })
  //     console.log("this.state.answer", this.state.answer, "prevState.answer:", prevProps.answer);
  //   }
  // }

  setCalc(solution){ 
    this.setState({
      calculations: [`${this.state.equation}=${solution}`].concat(this.state.calculations)
    })
    console.log('state2:', this.state);
  }//end setCalc

  // runEquation(){
  //   //1 set as tempEquation
  //   this.setState({
  //     tempEquation: this.state.equation,
  //   //2 evaluate the equation
  //     equation: (eval(this.state.equation)),
  //         //3 display as "tempEquation=equation"

  //   }, () => {
  //     this.setState({
  //       calculation: (this.state.tempEquation) = (JSON.stringify(this.state.equation))
  //     }, () => { console.log("state:", this.state); })
 
  //   });
  //   //4 save "tempEquation=equation" as calculation
  //   //5 send calculation to a more permanent save (json or db)
  // };

  // runEquation(){
  //   this.setState({
  //     tempEquation: this.state.equation
  //   }, () => {
  //     this.setState({
  //       equation: (eval(this.state.equation))
  //     }, () => {
  //       this.setState({
  //         calculation: (this.state.tempEquation = JSON.stringify(this.state.equation))
  //       }, () => {
  //           console.log("state:", this.state)
  //       })
  //     })
  //   })
  // }

  // runEquation(){
  //   this.setState({
  //     tempEquation: this.state.equation
  //   }).then(
  //     this.setState({
  //       equation: (eval(this.state.equation))
  //     })
  //   ).then(
  //     this.setState({
  //       calculation: (this.state.tempEquation = JSON.stringify(this.state.equation))
  //     })
  //   ).then(
  //     console.log('state:', this.state)
  //   )
  // }

  handleClick = buttonName => {
    console.log(buttonName);

    if(buttonName === "C"){
      this.clearEquation()
    }
    else if(buttonName === "="){
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

      </div>
    );
  }
}

export default App;
