const [WN, ...targetList] = require("fs")
  .readFileSync(__dirname + "/safecracker-data1.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map((item) => +item));

const [W, N] = WN;
//W = 배낭무게, N= 종류(길이)
//M = 금속무게, P= 무게당 가격
let resultPrice = 0;
targetList.sort((a, b) => {
  if (b[1] === a[1]) return b[0] - a[0];
  else return b[1] - a[1];
});
targetList.reduce((acc, cur) => {
  const [M, P] = cur;
  const MP = M * P;
  if (acc + M < W) {
    resultPrice += MP;
    return acc + M;
  } else {
    const needWeight = W - acc;
    const needPrice = MP / (M / needWeight);
    resultPrice += needPrice;
    return acc;
  }
}, 0);

console.log(resultPrice);
