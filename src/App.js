import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './Components/Calculator';
import Equation from './Components/Equation';

class App extends Component {
  constructor(){
    super();
    this.state = {
      equation: "pine forest",
      calculations: []
    }
  }//end constructor

  handleClick = buttonName => {
    console.log(buttonName);
  }




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
