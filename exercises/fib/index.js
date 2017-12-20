// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

/*
function fib(n) {
  const arr = []
  let prev = 0, next = 1;

  for (let i = 0; i <= n; i++) {
    arr.push(prev);
    let sum = prev + next;
    prev = next;
    next = sum;
  }
  return arr[arr.length - 1];
}
*/

/*
function fib(n) {
  arr = fibGeneraror(n);
  return arr[n];
}

function fibGeneraror(n, arr=[0,1]) {
  if (arr.length <= n) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    fibGeneraror(n, arr);
  }
  return arr;
}
*/

/*
function fib(n) {
  const a = Math.pow(((1 + Math.sqrt(5)) / 2), n);
  const b = Math.pow(((1 - Math.sqrt(5)) / 2), n);
  return (1 / Math.sqrt(5)) * (a - b)
}
*/

function memoize(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  }
}

function fib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n -1) + fib(n - 2);
}

fib = memoize(fib);

module.exports = fib;
