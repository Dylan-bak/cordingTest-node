module.exports = function roadsAndLibraries(n, c_lib, c_road, cities) {
  if (c_lib <= c_road) return n * c_lib;

  /** data init handling */
  const visited = Array.from({ length: n + 1 });
  const fromToList = visited.map(() => []);
  cities.forEach(([from, to]) => {
    fromToList[from].push(to);
    fromToList[to].push(from);
  });

  /** griding - grid배열 안만들고 바로 for문으로 대체 */
  let wayCount = 0;
  let totalCost = BigInt(0);
  for (let i = 1; i < n + 1; i++) {
    if (visited[i]) continue;
    const from = i;
    const totalPointCount = dts(from);
    wayCount++;

    totalCost += BigInt(c_lib) + BigInt(c_road) * BigInt(totalPointCount - 1);

    function dts(from) {
      let pointCount = 1;
      visited[from] = true;
      fromToList[from].forEach((to) => {
        if (!visited[to]) {
          const from = to;
          pointCount += dts(from);
        }
      });
      return pointCount;
    }
  }
  return totalCost;
};
