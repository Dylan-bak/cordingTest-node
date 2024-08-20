let input;
try {
  const dirnameList = __dirname.split("/");
  input = fs.readFileSync(
    `${dirnameList.join("/")}/${dirnameList[dirnameList.length - 1]}-data1.txt`
  );
} catch (error) {
  input = fs.readFileSync(`/dev/stdin`);
}
const lineList = input.toString().trim().split("\n");
const targetList = lineList.map((item) => item.trim().split(/\s+/).map(Number));

let testCase = 1;
while (targetList.length > 0) {
  const [N] = targetList.shift();
  if (N === 0) break;

  const grid = targetList.splice(0, N);

  const shapeList = [
    [[1, 1, 1, 1]],
    [
      [1, 1, 0],
      [0, 1, 1],
    ],
    [
      [1, 1, 1],
      [0, 0, 1],
    ],
    [
      [1, 1, 1],
      [0, 1, 0],
    ],
    [
      [1, 1],
      [1, 1],
    ],
  ];
  let max = -Infinity;
  shapeList.forEach((shape) => {
    for (let i = 0; i < 4; i++) {
      shape = i === 0 ? shape : rotateList(shape);
      for (let targetX = 0; targetX < N - shape.length + 1; targetX++) {
        for (let targetY = 0; targetY < N - shape[0].length + 1; targetY++) {
          let sum = 0;
          shape.forEach((row, shapeX) => {
            row.forEach((value, shapeY) => {
              if (value) sum += grid[targetX + shapeX][targetY + shapeY];
            });
          });
          max = Math.max(sum, max);
        }
      }
    }
  });
  console.log(`${testCase++}. ${max}`);
}

function rotateList(shape) {
  const row = shape.length;
  const col = shape[0].length;
  const rotated = Array.from({ length: col }, () => Array(row).fill(0));
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      rotated[j][row - i - 1] = shape[i][j];
    }
  }
  return rotated;
}
