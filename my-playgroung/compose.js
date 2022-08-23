const compose = (...fns) => {
  return fns.reduce((accum, curr) => {
      console.log('ACUM ', accum, curr);
      return curr(accum);
    }, x => x)
  
};

const sum = (a) => a + 2;
const prod = (b) => 2 * b;

const composed1 = prod(sum);

console.log(composed1);
const composed = compose(sum, prod);
console.log(composed);

// console.log(composed(2));