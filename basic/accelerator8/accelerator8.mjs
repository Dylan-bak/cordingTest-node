const inputList = require("fs")
  .readFileSync(__dirname + "/accelerator8-data1.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let judgeList = 0;
let result = "";
inputList.reduce((acc, cur) => {
  if (judgeList === cur - acc) {
    result = "mixed";
  }

  if (judgeList === 0) {
    judgeList = acc - cur;
  }

  return cur;
});
console.log(result);
if (result) {
  console.log("mixed");
  return "mixed";
} else if (judgeList === 1) {
  console.log("descending");
  return "descending";
} else if (judgeList === -1) {
  console.log("ascending");
  return "ascending";
}
