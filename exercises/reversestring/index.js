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

/*function reverse(str) {
  const strArr = str.split('');
  let reversedArr = [];
  strArr.forEach(v => {
    reversedArr.unshift(v);
  });
  return reversedArr.join('');
}*/

function reverse(str) {
  let reversed = '';
  for(let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

module.exports = reverse;
