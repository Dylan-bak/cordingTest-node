const inputList = require("fs")
  .readFileSync(__dirname + "/nAndM-beakjun15649-data1.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [N, M] = inputList;

let result = "";
const lineOutputList = [];
const visited = [];

const dfs = (depth) => {
  if (depth === M) {
    result += `${lineOutputList.join(" ")}\n`;
    return;
  }
  for (let i = 1; i <= N; i++) {
    if (visited[i]) continue;
    else visited[i] = true;
    lineOutputList.push(i);

    dfs(depth + 1);
    lineOutputList.pop();
    visited[i] = false;
  }
};

dfs(0);

console.log(result);
