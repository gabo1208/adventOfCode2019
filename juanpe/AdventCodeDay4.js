import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {


  constructor() {
    super();
    this.state = {
      name: 'React'
    };

    let from = "206938" //"206938"
    let to = "679128"   //"679128"
    console.log(this.part1(from, to))
    console.log(this.part2(from, to))
  }

  part1 = (from, to) => {
    let possible = 0;
    let newResult = []
    for (var i = parseInt(from); i <= parseInt(to); i++){
      let hasDoule = false;
      let hasError = false;
      let elem = i
      let elemAsString = '' + i
      for (var j = 0; j < elemAsString.length-1; j++) {
        if (parseInt(elemAsString[j]) > parseInt(elemAsString[j+1])) {
          hasError = true;
          break;
        }
        hasDoule = hasDoule || elemAsString[j] === elemAsString[j+1]
      }
      if (hasDoule && !hasError){
        possible++
        newResult.push(elemAsString)
      }
      
        
    }

    return { array: newResult, result: possible};
  }

  part2 = () => {

    var getdoubles = (str) => {
      let res = []
      for (var j = 0; j < str.length-1; j++) {
        if (str[j] === str[j+1] && res.filter(x => x === str[j]).length === 0){
          res.push(str[j])
        }
      }
      return res;
    }

    var getMoreThanDoubles = (str) => {
      let res = []
      for (var j = 0; j < str.length-2; j++) {
        if (str[j] === str[j+1] &&
            str[j+1] === str[j+2] &&
            res.filter(x => x === str[j]).length === 0){
          res.push(str[j])
        }
      }
      return res;
    }

    var removeExceeds = (array1, array2) => {
      let res = 0
      for (var i = 0; i < array1.length; i++) {
        for (var j = 0; j < array2.length; j++) {
          if (array1[i] === array2[j]){
            res++
          }
        }
      }
      return res;
    }

    var result1 = this.part1(from, to).array;
    let possible = 0;

    for (var i = 0; i < result1.length; i++){
      let elemAsString = result1[i]
      let doubleDigits = getdoubles(elemAsString)
      let moreThanDoubleDigits = getMoreThanDoubles(elemAsString)
      let exceeds = removeExceeds(moreThanDoubleDigits, doubleDigits)

      if (!(exceeds === doubleDigits.length)){
        possible++
      }
    }

    return possible;
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
