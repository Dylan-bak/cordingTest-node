const data = [
  [4, 5],
  [4, 8],
  [10, 14],
  [11, 13],
  [5, 12],
  [3, 7],
  [1, 4],
];

const solution = (targets) => {
  debugger;
  targets.sort((a, b) => b[0] - a[0]);
  let answer = 1;
  let checkPoint = targets[0][0];
  debugger;
  for (let i = 1; i < targets.length; i++) {
    const [start, end] = targets[i];

    if (end <= checkPoint) {
      checkPoint = start;
      answer++;
    }
  }
  return answer;
};

solution(data);
