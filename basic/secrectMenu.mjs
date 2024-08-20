const inputList = require("fs")
  .readFileSync(__dirname + "/secrectMenu-data1.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const [M, N, K] = inputList[0];
const screctList = inputList[1];
const targetList = inputList[2];

const targetListChar = targetList.join("");
const screctListChar = screctList.join("");

const result = targetListChar.indexOf(screctListChar) < 0 ? "normal" : "secrect";
console.log(result);
