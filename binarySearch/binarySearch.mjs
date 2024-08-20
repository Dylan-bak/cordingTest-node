function binarySearch(dataArray, target) {
  let low = 0;
  let high = dataArray.length - 1;
  let mid = 0;
  while (low <= high) {
    mid = Math.floor((high + low) / 2);
    if (dataArray[mid] === target) return mid;
    else if (dataArray[mid] > target) high = mid - 1;
    else low = mid + 1;
  }
  return undefined;
}

const sample = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

sample.sort((a, b) => a - b);

// ( 찾을 배열, 탐색할 값, 시작점, 끝점 )
const result = binarySearch(sample, 11, 0, sample.length - 1);

console.log(result);
