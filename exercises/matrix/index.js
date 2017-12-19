// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

/*
function matrix(n) {
  let startIndex = 0;
  let endIndex = n - 1;
  let curNumber = 1;
  const lastNumber = n * n;
  const matrix = [];
  for (let i = 0; i < n; i++) {
    matrix.push(new Array(n));
  }
  
  return processMatrix(matrix, curNumber, startIndex, endIndex);
}

function processMatrix(matrix, curNumber, startIndex, endIndex) {
  for (let curArrayN = startIndex; curArrayN <= endIndex; curArrayN++) {
    if (curArrayN === startIndex) {
      for (let i = startIndex; i <= endIndex; i++) {
        matrix[curArrayN][i] = curNumber++;
      }
    } else if (curArrayN === endIndex) {
      for (let i = endIndex; i >= startIndex; i--) {
        matrix[curArrayN][i] = curNumber++;
      }
      startIndex++;
      endIndex--;
      for (let i = endIndex; i >= startIndex; i--) {
        matrix[i][startIndex - 1] = curNumber++;
      }
      if (endIndex - startIndex <= 1) {
        matrix = processMatrix(matrix, curNumber, startIndex, endIndex);
      }
    } else {
      matrix[curArrayN][endIndex] = curNumber++;
    }
  };

  return matrix;
}
*/

function matrix(n) {
  const results = [];

  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;
  while (startColumn <= endColumn && startRow <= endRow) {
    // Top row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;

    // Right column
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--;

    // Bottom row
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;

    // start column
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }

  return results;
}

module.exports = matrix;
