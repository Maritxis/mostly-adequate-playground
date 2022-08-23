const memo = f => {
  const cache = {};

  return (...args) => {
    const argsStr = JSON.stringify(args);
    cache[argsStr] = cache[argsStr] || f(...args);
    return cache[argsStr];
  }
}

const add = (a, b) => a + b;

const memoAdd = memo(add);

console.log(memoAdd(3, 2));
console.log(memoAdd(3, 2));

console.log(memoAdd(7, 2));
console.log(memoAdd(7, 2));

console.log('this is the end');