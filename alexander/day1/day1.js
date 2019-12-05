const data = require('./input');

// Part One
let totalFuel = 0;
function calculate() {
  totalFuel = 0;
  data.forEach(el => {
    totalFuel += getFuel(el);
  });
  console.log('Part 1:', totalFuel);
}

// Part Two
function calculateIterate() {
  totalFuel = 0;
  data.forEach(dataItem => {
    getFuel(dataItem);
  });
  console.log('Part 2:', totalFuel);
}

function getFuel(el) {
  const currentEl = Math.floor(el / 3) - 2;
  if (currentEl > 0) {
    totalFuel += currentEl;
    getFuel(currentEl);
  }
  return currentEl;
}

calculate();
calculateIterate();
