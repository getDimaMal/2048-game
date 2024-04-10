export function matrixToArray(matrix: number[][]) {
  return matrix.reduce((res, row) => [...res, ...row], []);
}

export function arrayToMatrix(array: number[], size: number) {
  const matrix = [];
  for (let i = 0; i < array.length; i += size) {
    matrix.push(array.slice(i, i + size));
  }
  return matrix;
}

export function transposeMatrix(matrix: number[][]) {
  return matrix.map((_, colIndex) => matrix.map(row => row[colIndex]));
}
