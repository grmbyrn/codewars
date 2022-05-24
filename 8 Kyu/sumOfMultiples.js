function sumMul(n,m){
    //your idea here
      let total = 0
      if(n >= m) {
          return 'INVALID'
        }
      for(let i = n; i < m; i++){
        if(i % n === 0){
          total += i
        }
      }
      return total
}