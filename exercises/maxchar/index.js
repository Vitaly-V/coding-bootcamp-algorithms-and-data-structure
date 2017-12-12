    // --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const strObj = {};
  for(const v of str) {
    strObj[v] =  strObj[v] + 1 || 1;
  }
  return Object.keys(strObj).reduce((prev, cur) => {
    if (strObj[prev] > strObj[cur]) {
      return prev;
    }
    return cur;
  });
}

module.exports = maxChar;
