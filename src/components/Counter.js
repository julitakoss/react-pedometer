    
import React, { Component } from 'react';
import '../App.css';
import Step from './Step';

// class Counter extends Component {
//   render() {

//       console.log(this.props); 

//     return (
//       <div>
//           Krok: {this.props.count}, poziom {this.props.level}
//       </div>               
//     );
//   }
// }

// export default Counter;




class MyPedometer extends React.Component {
  state = {value: ''};

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <input value={this.state.value} onChange={this.handleChange} />
    );
  }
}


<input ref={(data) => { this._inputStep = data} } type="number" />