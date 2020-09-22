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
    tempEquation: "",
    equation: "pine forest",
    calculations: []
  }

  clearEquation() {
    this.setState({
      equation: ""
    })
  };//end clearEquation

  updateEquation(buttonName){
    this.setState({
      equation: this.state.equation + buttonName
    })
  };//end updateEquation

  runEquation(){
    //1 set as tempEquation
    this.setState({
      tempEquation: this.state.equation,
    //2 evaluate the equation
      equation: (eval(this.state.equation))
    }, () => {
      console.log("state:", this.state);  
    });
    // console.log("state:", this.state);    

    //3 display as "tempEquation=equation"
    //4 save "tempEquation=equation" as calculation
    //5 send calculation to a more permanent save (json or db)
  }

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
        <Equation equation={this.state.equation}/>

      </div>
    );
  }
}

export default App;
