const fs = require("fs");
const input = fs
  .readFileSync(__dirname + "/combination-data1.txt")
  .toString()
  .trim()
  .split("\n");
const A = parseInt(input.shift()); // 첫번째 값 제거
let num = 0;
function factorial(num) {
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}
for (let i = 0; i < A; i++) {
  const arr = input[i].split(" ");
  const N = parseInt(arr[0]);
  const M = parseInt(arr[1]);
  console.log(factorial(M) / (factorial(M - N) * factorial(N)));
  console.log(Math.round(factorial(M) / (factorial(M - N) * factorial(N))));
}
