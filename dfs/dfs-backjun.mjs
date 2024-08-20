const rl = require("readline").createInterface({
  input: require("fs").createReadStream(__dirname + "/dfs-backjun.txt"),
  // input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => input.push(line)).on("close", () => {
  solution(input);
  process.exit();
});

const targetArray = [];
const visited = [];
let bfsResult = "";

const solution = () => {
  const initPoint = input[0].split(" ")[2];
  bfsResult = initPoint;
  visited[initPoint] = true;

  for (let i = 1; i < input.length; i++) {
    const [startIndex, endIndex] = input[i].split(" ");
    targetArray[startIndex]
      ? targetArray[startIndex].push(Number(endIndex))
      : (targetArray[startIndex] = [Number(endIndex)]);

    targetArray[endIndex]
      ? targetArray[endIndex].push(Number(startIndex))
      : (targetArray[endIndex] = [Number(startIndex)]);
  }
  dfs(initPoint);
};

const dfs = (startPoint) => {
  const sortArray = [...targetArray[startPoint]];
  sortArray.sort((a, b) => a - b);
  for (let i = 0; i < sortArray.length; i++) {
    if (!visited[sortArray[i]]) {
      visited[sortArray[i]] = true;
      bfsResult = `${bfsResult} ${sortArray[i]}`;
      dfs(sortArray[i]);
    }
  }
  console.log(bfsResult);
};

class Queue {
  constructor() {
    this.store = {};
    this.front = 0;
    this.rear = 0;
  }

  size() {
    if (this.store[this.rear] === undefined) {
      return 0;
    } else {
      return this.rear - this.rear + 1;
    }
  }

  push(value) {
    if (this.size() === 0) {
      this.store["0"] = value;
    } else {
      this.rear += 1;
      this.store[this.rear] = value;
    }
  }

  popleft() {
    let temp;
    if (this.front === this.rear) {
      temp = this.store[this.front];
      delete this.store[this.front];
      this.front = 0;
      this.rear = 0;
      return temp;
    } else {
      temp = this.store[this.front];
      delete this.store[this.front];
      this.front += 1;
      return temp;
    }
  }
}
