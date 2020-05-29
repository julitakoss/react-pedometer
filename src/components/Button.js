import React, {Component} from 'react';

class Button extends Component {

  generateNumber = () => {
    // console.log('generator');
      this.props.generator();
  }

  render() {
    return (
      <div>
        <button onClick={this.generateNumber}>Losuj liczbę</button>
      </div>
    )
  }
}

export default Button;
class MyFirstForm extends React.Component {
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