const roadsAndLibraries = require("./hackerRank-RoadsAndLibraries-roadsAndLibraries");

const filenameList = __filename.split("/");
const [filename] = filenameList.pop().split(".");
let filePath_local = `${filenameList.join("/")}/${filename}-data.txt`;
let filePath_dev = `/dev/stdin`;
const filePath = filePath_local;

const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim();
const lineList = input.split("\n");
const targetList = lineList.map((item) => item.trim().split(/\s+/).map(Number));

const q = targetList[0][0];
let index = 1;
for (let qItr = 0; qItr < q; qItr++) {
  const firstMultipleInput = targetList[index];
  const n = firstMultipleInput[0];
  const m = firstMultipleInput[1];
  const c_lib = firstMultipleInput[2];
  const c_road = firstMultipleInput[3];

  let cities = [];
  for (let i = 0; i < m; i++) cities.push(targetList[index + 1 + i]);
  const result = roadsAndLibraries(n, c_lib, c_road, cities);
  console.log(result);
  index += m + 1;
}
