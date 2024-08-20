const inputList = require("fs")
  .readFileSync(__dirname + "/reserveRoom-data1.txt")
  .toString()
  .split("\n");

const [N, M] = inputList[0].split(" ").map(Number);
const roomList = [];
const reserveList = [];

const reserveObj = {};

for (let i = 1; i < N + 1; i++) {
  roomList.push(inputList[i]);
}

for (let i = 1 + N; i < inputList.length; i++) {
  reserveList.push(inputList[i].split(" "));
}

reserveList.sort();
reserveList.forEach((reserve) => {
  const [roomName, start, end] = reserve;
  if (reserveObj[roomName]) reserveObj[roomName] += " ";
  else reserveObj[roomName] = "";

  for (let i = start; i < Number(end) + 1; i++) {
    reserveObj[roomName] += `${i},`;
  }
});

let result = "";
Object.keys(reserveObj).forEach((roomName, index, arr) => {
  result += `Room ${roomName}:`;
  let count = 0;
  let beforeValue = false;
  let timeLine = "";

  const a = reserveObj[roomName].split(" ");
  console.log("a: ", a);
  // for(let i=9; i<18; i++) {
  //     const curValue = reserveObj[roomName][i]
  //     if(curValue && !beforeValue) {
  //         timeLine += `\n${String(i).padStart(2, "0")}`
  //     } else if(!curValue && beforeValue) {
  //         timeLine += `-${String(i).padStart(2, "0")}`
  //         count ++
  //     }
  //     beforeValue = curValue
  // }
  // result += `\n${count || "Not"} abailable:${timeLine}`
  if (arr.length !== index) result += `\n-----\n`;
});

// console.log(result)
