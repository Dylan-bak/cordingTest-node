// const inputList = require("fs")
//   .readFileSync(__dirname + "/programmers-minRect-data1.txt")
//   .toString()
//   .split("\n")
//   .map((line) => line.split(" ").map(Number));
const inputList = [
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
];

function solution(sizeList) {
  let result = null;
  const sortedSizeList = sizeList.map((size) => {
    size.sort((a, b) => b - a);
    return size;
  });

  let maxLongLength = 0;
  let maxRowLength = 0;

  sortedSizeList.forEach((sortedSize) => {
    const [longLength, rowLength] = sortedSize;
    if (maxLongLength < longLength) maxLongLength = longLength;
    if (maxRowLength < rowLength) maxRowLength = rowLength;
  });

  console.log(result);
  return sortedSizeList;
}

solution(inputList);
