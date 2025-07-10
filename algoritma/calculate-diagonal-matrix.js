const calculateDiagonalMatrix = (matrix) => {
  let resultD01 = 0;
  let resultD02 = 0;
  let posLeft = 0;
  let posRight = 0;
  let matrixLength = matrix?.length - 1;

  for (let y = 0; y < matrix?.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      if (y === posLeft && x === posLeft) {
        resultD01 += matrix[y][x];
        posLeft++;
      }

      if (y === posRight && x === matrixLength) {
        resultD02 += matrix[y][x];
        matrixLength--;
        posRight++;
      }
    }
  }

  return resultD01 - resultD02;
};

console.log(
  calculateDiagonalMatrix([
    [1, 2, 0],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
