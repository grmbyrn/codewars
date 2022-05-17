function mergeArrays(a, b) {
    // your code here
    const len = Math.max(a.length, b.length)
    const result = []
    for(let i = 0; i < len; i++){
      if(a[i] !== undefined){
        result.push(a[i])
      }
      if(b[i] !== undefined){
        result.push(b[i])
      }
    }
    return result
}