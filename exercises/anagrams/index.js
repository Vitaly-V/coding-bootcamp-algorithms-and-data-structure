// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

/*
function anagrams(stringA, stringB) {
  const objA = createCharMap(stringA);
  const objB = createCharMap(stringB);

  if (Object.keys(objA).length !== Object.keys(objB).length) {
    return false;
  }

  for(const name in objA) {
    if (objA[name] !== objB[name]) {
      return false;
    }
  }
  return true;

}

function createCharMap(str) {
  const chars = {};
  const cleanStr = str.replace(/\W/g, '').toLocaleLowerCase();
  for(const i of cleanStr) {
    chars[i] = chars[i] + 1 || 1;
  }
  return chars;
}
*/

function anagrams(stringA, stringB) {
  return (prepareString(stringA) === prepareString(stringB));
}

function prepareString(str) {
  return str.replace(/\W/, '').toLocaleLowerCase().split('').sort().join('');
}

module.exports = anagrams;
