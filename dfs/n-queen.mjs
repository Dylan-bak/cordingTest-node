let answer = solution(4)
console.log(answer)
function solution(n) {
  let answer = 0;
  
  const statusInit = Array.from({length:n});
  dfs(0, statusInit);  

  function dfs(row, status) {
      if(row === n) {
        console.log(status)
        answer++
        return;
      }

      for(let col=0; col<n; col++) {
          if(isAvailable( status, [col, row] )){
              status[row] = col
              dfs(row+1, status)
              status[col] = undefined
          } 
      }
  }
  
  
  function isAvailable(qList, [nowCol,nowRow]) {
      for(let i=0; i<qList.length; i++) {
          if(qList[i] === nowCol) {
            return false
          }
          const oldCol = qList[i]
          const oldRow = i
          const grade = (nowCol - oldCol) / (nowRow - oldRow)
          if(Math.abs(grade)===1) return false
      }
      
      return true
  }

 return answer;
}

