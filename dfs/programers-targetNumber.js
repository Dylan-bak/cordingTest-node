const filenameList = __filename.split("/");
const [filename] = filenameList.pop().split(".");
let filePath_local = `${filenameList.join("/")}/${filename}-data.txt`;
let filePath_dev = `/dev/stdin`;
const filePath = filePath_local;

const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim();
const lineList = input.split("\n");
const targetList = lineList.map((item) => item.trim().split(/\s+/).map(Number));

const [target] = targetList.pop();

solution(targetList, target)
function solution(numbers, target) {
  let count = 0
  const dx = [1,-1]
  
  dfs(0,0)
  function dfs(index, sum) {
      if(index === numbers.length) {
          if(sum === target) count++
          return
      }
      
      for(let i=0; i<2; i++) {
          const newSum = dx[i] * numbers[index] + sum;
          dfs(index+1, newSum)
      }
  }
  
  return count;
}