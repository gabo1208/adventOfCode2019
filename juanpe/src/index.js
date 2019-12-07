import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Day4 from './problems/day4'
import Day5 from './problems/day5'
import Day6 from './problems/day6'

class App extends Component {

  constructor() {
    super();
    this.state = {
      name: 'Juanpe',
      isClickedDay4: false,
      isClickedDay5: false,
      isClickedDay6: false
    };
  }

  buttonClickedDay5 = () => {
    this.setState({ isClickedDay5: !this.state.isClickedDay5 })
  }

  buttonClickedDay6 = () => {
    this.setState({ isClickedDay6: !this.state.isClickedDay6 })
  }

  buttonClickedDay4 = () => {
    this.setState({ isClickedDay4: !this.state.isClickedDay4 })
  }

  render() {
    const { name, isClickedDay4, isClickedDay5, isClickedDay6 } = this.state;
    return (
      <div>
        <Hello name={name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <button onClick={this.buttonClickedDay4}> show Day 4 </button>
        {isClickedDay4 && <Day4 />}
        <button onClick={this.buttonClickedDay5}> show Day 5 </button>
        {isClickedDay5 && <Day5 />}
        <button onClick={this.buttonClickedDay6}> show Day 6 </button>
        {isClickedDay6 && <Day6 />}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
