import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {

  modules = [
    125517
    ,140694
    ,65516
    ,98562
    ,75660
    ,133603
    ,114499
    ,81732
    ,119081
    ,50911
    ,96650
    ,98330
    ,145164
    ,64851
    ,67455
    ,108208
    ,102674
    ,147581
    ,112059
    ,62456
    ,132006
    ,88738
    ,72139
    ,121074
    ,103936
    ,65149
    ,82081
    ,90168
    ,134670
    ,79142
    ,83296
    ,109983
    ,60250
    ,61982
    ,136326
    ,52980
    ,79969
    ,66851
    ,77049
    ,59720
    ,73494
    ,115708
    ,109326
    ,136399
    ,72950
    ,82041
    ,105467
    ,112321
    ,125019
    ,79213
    ,107186
    ,148340
    ,112833
    ,125646
    ,112509
    ,52396
    ,59446
    ,93967
    ,73179
    ,88725
    ,98256
    ,143303
    ,57503
    ,120314
    ,147921
    ,130856
    ,95561
    ,145857
    ,54976
    ,100605
    ,77961
    ,143120
    ,84127
    ,130389
    ,131848
    ,109542
    ,119653
    ,61660
    ,124800
    ,61498
    ,149675
    ,143906
    ,120361
    ,68328
    ,104473
    ,54279
    ,119945
    ,122511
    ,109410
    ,135350
    ,112070
    ,88822
    ,149086
    ,64594
    ,118788
    ,102569
    ,61721
    ,89170
    ,83581
    ,58722
  ]

  constructor() {
    super();
    this.state = {
      name: 'React',
      fuels: this.modules.map(x => this.fuelRequired(x, []).reduce(this.sum))
    };

    var x = 0;

    for(var i = 0; i < this.modules.length; i++){
      x += this.state.fuels[i];
    }

    console.log(this.state.fuels.reduce(this.sum));

    
  }

  sum = (total, num) => {
    return total + num;
  }

  fuelRequired = (mass, acum) => {
    var fuel = Math.floor(mass / 3) - 2;

    if (fuel <= 0)
      return acum;

    acum.push(fuel);
    return this.fuelRequired(fuel, acum)
  }


  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>

        {
          this.state.fuels.map(x => {
            return <p> {x} </p>
          })
        }

      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
