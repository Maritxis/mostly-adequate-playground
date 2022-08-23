const f = (a, b, c) => a + b + c;

const curryf = (a) => (b) => (c) => a + b + c;

const curryf1 = curryf(2);
const curryf2 = curryf1(3);
const curryf3 = curryf2(4);
console.log(curryf3);

const curry = fun => (
  (...args) => {
    return (...args2) => {
      return fun(...args, ...args2);
    }
  }
)

const f1 = curry(f);

const a = f1(2);

console.log(a(4, 6));