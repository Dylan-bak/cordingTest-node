const [firstInput, input] = require("fs")
  .readFileSync(__dirname + "/permutation-data2.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = firstInput.split(" ").map(Number);
//N = 길이, K = 합을 구하기 위한 연속적인 날짜의 수

const targetList = input.split(" ").map(Number);

let sum = 0;
for (let i = 0; i < K; i++) {
  sum += targetList[i];
}

let max = sum;

for (let i = 0; i < N - K; i++) {
  sum = sum - targetList[i] + targetList[i + K];
  if (sum > max) max = sum;
}

console.log(max);
