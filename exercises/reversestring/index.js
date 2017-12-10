// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/*function reverse(str) {
  return str
    .split('')
    .reverse()
    .join('');
}*/

function reverse(str) {
  const strArr = str.split('');
  let reversedArr = [];
  strArr.forEach(v => {
    reversedArr.unshift(v);
  });
  return reversedArr.join('');
}

module.exports = reverse;
