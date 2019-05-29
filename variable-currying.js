/*
* The task is, given the variable depth of currying
* calculate the result by consequentially adding/subtracting
* a provided value
*/

// use assert module in strict mode
const assert = require('assert').strict;

function addSubtract(x) {
  let sign = 'plus';
  let sum = x;
  
  const calc = n => {
    sum = sign === 'plus' ? (sign = 'minus', sum + n) : (sign = 'plus', sum - n);

    return calc;
  };
  
  calc.valueOf = () => {
    return sum;
  };
  
  return calc;
}

try{
  // + acts as type coercion/cast operator
  // produces the same result as Number()
  assert.deepEqual(+addSubtract(1)(2)(3), 0);
  assert.deepEqual(+addSubtract(1)(2)(3)(4)(5)(6), 5);
  console.log('Ok');
} catch (err) {
  console.log(err.message);
}
