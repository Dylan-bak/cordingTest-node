// let dx= [1,-1] //이동이 필요할경우
// for() { //도메인에 따라 for문
//   count++

//   dfs(초기값) 
//   function dfs(value) {
//     if(visited[i]) continue or return;

//     for(let j=0; j<dx.length; j++) {
//       ...
//       dfs(newValue)
//     }
//   }
// } 


for (let i = 1; i < n + 1; i++) {
  if (visited[i]) continue;
  const innerGlobalVariables = dfs(i);
  wayCount++;

  console.log(innerGlobalVariables, wayCount);

  function dfs(from) {
    let pointCount = 1;
    visited[from] = true;
    fromToList[from].forEach((to) => {
      if (visited[to]) return;
      const from = to;
      pointCount += dfs(from);
    });
    return pointCount;
  }
}

/**
 * ⇣⇣⇣
 * 해설
 * ⇣⇣⇣
 * */

/** 1. 좌표 - grid 배열 or 성능을 위해 배열을 대신할 for문 */
for (let i = 1; i < n + 1; i++) {
  /** 2. 좌표 백트래킹 - visited */
  if (visited[i]) continue; // for문은 continue다 return은 for문을 종료시켜 버린다.
  /** 3. dfs - dfs"내부전역" 데이터를 props로 내려주거나 리턴으로 받기 */
  const innerGlobalVariables = dfs(i);
  wayCount++;

  console.log(innerGlobalVariables, wayCount);

  function dfs(from) {
    /** 4. dfs내부 - "내부 전역"에 넣을 "부분 내부"값 */
    let pointCount = 1;
    /** 5. dfs내부 - "현재 노드" 방문체크 ("아래 방문할 노드"에서 체크하면 안됨) */
    visited[from] = true;
    fromToList[from].forEach((to) => {
      // forEach는 리턴
      if (visited[to]) return;
      const from = to;
      pointCount += dfs(from);
    });
    return pointCount;
  }
}
