const rl = require("readline").createInterface({
  //   input: require("fs").createReadStream(__dirname + "/softeer-carTest-data2.txt"),
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => input.push(line)).on("close", () => {
  solution(input);
  process.exit();
});

const solution = (inputList) => {
  const [n, q] = inputList[0].split(" ").map((item) => Number(item));
  const targetList = inputList[1]
    .trim()
    .split(" ")
    .sort((a, b) => a - b)
    .map(Number);

  for (let i = 2; i < q + 2; i++) {
    const targetIndex = binarySearch(targetList, Number(inputList[i].trim()));
    // console.log("Number(inputList[i].trim()) : ", Number(inputList[i].trim()));
    // console.log("targetIndex : ", targetIndex);
    // console.log("targetList : ", targetList);
    let answer = 0;
    if (targetIndex > 0 && targetIndex < targetList.length - 1) answer = targetIndex * (n - targetIndex - 1);
    console.log(answer);
  }
};

const binarySearch = (dataArray, target) => {
  let low = 0;
  let high = dataArray.length - 1;
  let mid = 0;
  while (low <= high) {
    mid = Math.floor((high + low) / 2);
    if (dataArray[mid] === target) return Number(mid);
    else if (dataArray[mid] > target) high = mid - 1;
    else low = mid + 1;
  }
  return -1;
};
