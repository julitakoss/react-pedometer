import React, { Component } from 'react';

class Step extends Component {
    constructor() {
      super();
  
      this.state = {
        stepNumber: 0
      }
    }
    <input type="number" />
    generateStepNumber = () => {
      const newNumber = Math.random();
  
      this.setState((prevState) => ({
          stepNumber: prevState.stateNumber + newNumber
      }));
    }
  
    componentDidMount() {
      this.generateStateNumber();
    }
  
  
    render() {
      return (
        <div className="step-container">
          <Display value={this.state.setNumber}/>
              <Button generator={this.generateSetNumber}/>
        </div>
      )
    }
  }
  
  export default Random;

  <input type="number" />