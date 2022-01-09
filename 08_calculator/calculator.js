const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((prev, curr) => prev + curr, 0);
};

const multiply = function (array) {
  return array.reduce((prev, curr) => prev * curr);
};

const power = function (num, power) {
  let result = num;
  for (let i = 1; i < power; i++) {
    result *= num;
  }

  return result;
};

const factorial = function (n) {
  let f = []
  if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = factorial(n-1) * n;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
