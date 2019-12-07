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

    console.log(this.part1(1));
    //this is part2
    console.log(this.part1(5));

  }

  initialState = [
    3,225,1,225,6,6,1100,1,238,225,104,0,1101,69,55,225,1001,144,76,224,101,-139,224,224,4,224,1002,223,8,223,1001,224,3,224,1,223,224,223,1102,60,49,225,1102,51,78,225,1101,82,33,224,1001,224,-115,224,4,224,1002,223,8,223,1001,224,3,224,1,224,223,223,1102,69,5,225,2,39,13,224,1001,224,-4140,224,4,224,102,8,223,223,101,2,224,224,1,224,223,223,101,42,44,224,101,-120,224,224,4,224,102,8,223,223,101,3,224,224,1,223,224,223,1102,68,49,224,101,-3332,224,224,4,224,1002,223,8,223,1001,224,4,224,1,224,223,223,1101,50,27,225,1102,5,63,225,1002,139,75,224,1001,224,-3750,224,4,224,1002,223,8,223,1001,224,3,224,1,223,224,223,102,79,213,224,1001,224,-2844,224,4,224,102,8,223,223,1001,224,4,224,1,223,224,223,1,217,69,224,1001,224,-95,224,4,224,102,8,223,223,1001,224,5,224,1,223,224,223,1102,36,37,225,1101,26,16,225,4,223,99,0,0,0,677,0,0,0,0,0,0,0,0,0,0,0,1105,0,99999,1105,227,247,1105,1,99999,1005,227,99999,1005,0,256,1105,1,99999,1106,227,99999,1106,0,265,1105,1,99999,1006,0,99999,1006,227,274,1105,1,99999,1105,1,280,1105,1,99999,1,225,225,225,1101,294,0,0,105,1,0,1105,1,99999,1106,0,300,1105,1,99999,1,225,225,225,1101,314,0,0,106,0,0,1105,1,99999,1107,677,677,224,102,2,223,223,1006,224,329,1001,223,1,223,1108,677,677,224,1002,223,2,223,1006,224,344,1001,223,1,223,107,226,226,224,1002,223,2,223,1006,224,359,101,1,223,223,1008,226,226,224,102,2,223,223,1005,224,374,1001,223,1,223,1107,226,677,224,1002,223,2,223,1006,224,389,1001,223,1,223,1008,677,226,224,1002,223,2,223,1005,224,404,1001,223,1,223,7,677,226,224,102,2,223,223,1005,224,419,1001,223,1,223,1008,677,677,224,1002,223,2,223,1006,224,434,1001,223,1,223,108,226,226,224,102,2,223,223,1006,224,449,1001,223,1,223,108,677,677,224,102,2,223,223,1006,224,464,1001,223,1,223,107,226,677,224,1002,223,2,223,1005,224,479,101,1,223,223,1108,226,677,224,1002,223,2,223,1006,224,494,1001,223,1,223,107,677,677,224,1002,223,2,223,1006,224,509,101,1,223,223,7,677,677,224,102,2,223,223,1006,224,524,1001,223,1,223,1007,226,677,224,1002,223,2,223,1005,224,539,1001,223,1,223,8,226,677,224,1002,223,2,223,1005,224,554,101,1,223,223,8,677,677,224,102,2,223,223,1005,224,569,101,1,223,223,7,226,677,224,102,2,223,223,1006,224,584,1001,223,1,223,1007,226,226,224,102,2,223,223,1006,224,599,1001,223,1,223,1107,677,226,224,1002,223,2,223,1006,224,614,1001,223,1,223,1108,677,226,224,1002,223,2,223,1005,224,629,1001,223,1,223,1007,677,677,224,102,2,223,223,1006,224,644,1001,223,1,223,108,226,677,224,102,2,223,223,1005,224,659,101,1,223,223,8,677,226,224,1002,223,2,223,1006,224,674,1001,223,1,223,4,223,99,226
  ]

  initialState2 = [
    3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,
    1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,
    999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99
  ]

  part1 = (inputVal) => {
    var initialState = [...this.initialState];
    var actualPosition = 0;
    var elem = initialState[actualPosition];

    var response = [];

    while (elem != 99)
    {
      var toIncrease = 1;
      var opCode;
      var parameterModes = [];
      let shouldChangePointer = false;
      if (!this.isBasic(elem)){
        opCode = this.getOpCode('' + elem);
        parameterModes = this.getParameterModes('' + elem);
        toIncrease += this.hasThreeParameters(opCode) ? parameterModes.length : 
          this.hasTwoParameters(opCode) ? 2 : 1;
      } else {
        opCode = elem;
        parameterModes.push(0);
        if (this.hasThreeParameters(opCode)){
          parameterModes.push(0)
          parameterModes.push(0)
        }
        if (this.hasTwoParameters(opCode)){
          parameterModes.push(0)
        }
        toIncrease += parameterModes.length;
      }
/*
      console.log(initialState)
      console.log('opCode', opCode)
      console.log('toIncrease', toIncrease)
      console.log('actualPosition ', actualPosition)*/

      if (this.hasThreeParameters(opCode)){

        const pos_a = initialState[actualPosition + 1];
        const pos_b = initialState[actualPosition + 2];
        const pos_c = initialState[actualPosition + 3];
        const value1 = this.isPositionMode(parameterModes[0]) ? initialState[pos_a] : pos_a;
        const value2 = this.isPositionMode(parameterModes[1]) ? initialState[pos_b] : pos_b;

        if (opCode === 1){
          initialState[pos_c] = value1 + value2;
        } else if (opCode === 2){
          initialState[pos_c] = value1 * value2;
        } else if (opCode === 7){
          initialState[pos_c] = value1 < value2 ? 1 : 0;
        } else if (opCode === 8){
          initialState[pos_c] = value1 === value2 ? 1 : 0;
        } else {
          return null;
        }
      } else if (this.hasTwoParameters(opCode)){

        const pos_a = initialState[actualPosition + 1];
        const pos_b = initialState[actualPosition + 2];
        const value1 = this.isPositionMode(parameterModes[0]) ? initialState[pos_a] : pos_a;
        const value2 = this.isPositionMode(parameterModes[1]) ? initialState[pos_b] : pos_b;
      /*  console.log('pos_a', 'pos_b')
        console.log(pos_a, pos_b)
        console.log('value1', 'value2')
        console.log(value1, value2)
        */if (opCode === 5){
          if (value1 != 0) {
            toIncrease = value2;
            shouldChangePointer = true;
          }
        } else if (opCode === 6){
          if (value1 === 0) {
            toIncrease = value2;
            shouldChangePointer = true;
          }
        } else {
          return null;
        }
        //console.log('dentro del if toIncrease', toIncrease)
      } else {

        const pos_a = initialState[actualPosition + 1];
        const value1 = this.isPositionMode(parameterModes[0]) ? initialState[pos_a] : pos_a;

        if (opCode === 3){
          initialState[pos_a] = inputVal;
        } else if (opCode === 4){
          response.push(initialState[pos_a])
        } else {
          return null;
        }
      }

      actualPosition = shouldChangePointer ? toIncrease : actualPosition + toIncrease;
      elem = initialState[actualPosition];
    }

    return response;
  }

  isBasic = (num) => {
    return num <= 4;
  }

  hasTwoParameters = (opCode) => {
    return opCode === 5 || opCode === 6;
  }

  hasThreeParameters = (opCode) => {
    return opCode === 1 || opCode === 2 || opCode === 7 || opCode === 8;
  }

  isInmediateMode = (param) => {
    return param === 1;
  }

  isPositionMode = (param) => {
    return param === 0;
  }

  getOpCode = (strElem) => {
    return parseInt(strElem.substr(strElem.length - 2));
  }

  getParameterModes = (strElem) => {
    strElem = this.formatted_string('00000',strElem,'l')
    let params = strElem.substr(0, strElem.length - 2);
    let result = [];
    for (var i = 0; i < params.length; i++){ 
      result.push(parseInt(params[i]))
    }
    
    return result.reverse();
  }

  formatted_string = (pad, user_str, pad_pos) =>
  {
    if (typeof user_str === 'undefined') 
      return pad;
    if (pad_pos == 'l')
      {
      return (pad + user_str).slice(-pad.length);
      }
    else 
      {
      return (user_str + pad).substring(0, pad.length);
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
