const inputList = require("fs")
  .readFileSync(__dirname + "/classAllocation-data1.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map((item) => +item));
// const input = require("fs").readFileSync('/dev/stdin').toString().split(" ");

let classCount = 1;
const [N, ...targetList] = inputList;
targetList.sort((a, b) => {
  if (b[0] - a[0]) return b[1] - a[1];
  else return b[0] - a[0];
});
let checkPoint = targetList[0][0];
for (let i = 1; i < N; i++) {
  const [S, F] = targetList[i];
  if (F <= checkPoint) {
    checkPoint = S;
    classCount++;
  }
}
console.log(classCount);
