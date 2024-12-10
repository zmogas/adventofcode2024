const fs = require("fs");

const day = "04";

const input = fs.readFileSync(`${day}.txt`, "utf-8");

const matrix = input.split("\n");

// console.log(matrix);
const XMAS = "XMAS";
const SAMX = "SAMX";

let xmas = 0;

// top-bottom lines horizontal
for (let i = 0; i < matrix.length; i++) {
  // console.log("LINE", matrix[i]);
  for (let j = 0; j < matrix[i].length - 3; j++) {
    const split = matrix[i].slice(j, j + 4);
    // console.log(i, j, "split", split);
    if (split === XMAS || split === SAMX) {
      xmas++;
    }
  }
}

// left-right columns vertically
for (let i = 0; i < matrix[i].length - 3; i++) {
  for (let j = 0; j < matrix.length; j++) {
    const split =
      matrix[i][j] + matrix[i + 1][j] + matrix[i + 2][j] + matrix[i + 3][j];
    // console.log(i, j, split);
    if (split === XMAS || split === SAMX) {
      xmas++;
    }
  }
}

// diagonally left-bottom
for (let i = 0; i < matrix.length - 3; i++) {
  for (let j = 0; j < matrix[i].length - 3; j++) {
    const split =
      matrix[i][j] +
      matrix[i + 1][j + 1] +
      matrix[i + 2][j + 2] +
      matrix[i + 3][j + 3];
    // console.log(i, j, split);
    if (split === XMAS || split === SAMX) {
      xmas++;
    }
  }
}

// diagonally right-bottom
for (let i = 0; i < matrix.length - 3; i++) {
  for (let j = matrix[i].length - 1; j >= 3; j--) {
    const split =
      matrix[i][j] +
      matrix[i + 1][j - 1] +
      matrix[i + 2][j - 2] +
      matrix[i + 3][j - 3];
    // console.log(i, j, split);
    if (split === XMAS || split === SAMX) {
      xmas++;
    }
  }
}

console.log("Answer A:", xmas);
