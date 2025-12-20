/** '24.4.26 */
// let priorities = [2, 1, 3, 2];
// let location = 2;
// let result = 1;
let priorities = [1, 1, 9, 1, 1, 1];
let location = 0;
let result = 5;

// const inputList = require("fs")
//   .readFileSync(__dirname + "/classAllocation-data1.txt")
//   .toString()
//   .trim()
//   .split("\n")
//   .map((item) => item.split(" ").map((item) => +item));
// // const input = require("fs").readFileSync('/dev/stdin').toString().split(" ");
solution(priorities, location);

function solution(priorities, location) {
  let answer = 0;
  let maxIndex = null;
  while (maxIndex !== location) {
    const seachStartIndex = maxIndex === 0 || maxIndex ? maxIndex + 1 : 0;
    const max = Math.max(...priorities);
    maxIndex = priorities.indexOf(max, seachStartIndex);
    priorities[maxIndex] = 0;
    if (maxIndex !== -1) {
      answer++;
    }
  }

  console.log("answer", answer);
  return answer;
}

return;
