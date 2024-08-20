const inputList = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/combination-data1.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const T = inputList.shift()[0];

inputList.forEach((input) => {
  //(0 < N ≤ M < 30)
  const [N, M] = input;
  let NPactorial = 1;
  let MPactorial = 1;

  if (N === M) {
    console.log(1);
    return;
  }

  for (let i = 0; i < M - N; i++) {
    console.log("M - N", M - N);
    MPactorial *= M - i;
    NPactorial *= M - N - i;
  }
  console.log(Math.round(MPactorial / NPactorial));
});
