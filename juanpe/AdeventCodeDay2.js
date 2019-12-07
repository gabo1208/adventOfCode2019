import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {

constructor() {
    super();
    this.state = {
      name: 'React',
      //fuels: this.initialState.map(x => this.fuelRequired(x, []).reduce(this.sum))
    };

    console.log(this.part1(12,2));
    console.log(this.part2(19690720));

  }

  initialState = [
    1,0,0,3,
    1,1,2,3,
    1,3,4,3,1,5,0,3,2,13,1,19,1,6,19,23,2,23,6,27,1,5,27,31,1,10,31,35,2,6,35,39,1,39,13,43,1,43,9,47,2,47,10,51,1,5,51,55,1,55,10,59,2,59,6,63,2,6,63,67,1,5,67,71,2,9,71,75,1,75,6,79,1,6,79,83,2,83,9,87,2,87,13,91,1,10,91,95,1,95,13,99,2,13,99,103,1,103,10,107,2,107,10,111,1,111,9,115,1,115,2,119,1,9,119,0,99,2,0,14,0
  ]


  part1 = (pos1, pos2) => {
    var initialState = [...this.initialState];
    var actualPosition = 0;
    var elem = initialState[actualPosition];
    initialState[1] = pos1;
    initialState[2] = pos2;
    while (elem != 99)
    {
      const pos_a = initialState[actualPosition + 1];
      const pos_b = initialState[actualPosition + 2];
      const pos_c = initialState[actualPosition + 3];
      if (elem === 1){
        initialState[pos_c] = initialState[pos_a] + initialState[pos_b];
      } else if (elem === 2){
        initialState[pos_c] = initialState[pos_a] * initialState[pos_b];
      } else {
        return null;
      }

      actualPosition += 4;
      elem = initialState[actualPosition];
    }

    return initialState[0];

  }

  part2 = (output) => {
    for(var verb = 0; verb <= 99; verb++){
      for(var noun = 0; noun <= 99; noun++){
        var res1 = this.part1(noun, verb);
        if (res1 === output){
          console.log('noun => ',noun,', verb => ', verb)
          return 100 * noun + verb;
        }
      }
    }
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
