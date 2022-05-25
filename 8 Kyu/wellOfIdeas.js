function well(x){
    let count = 0
    
    x.forEach(i => {
      if(i === 'good'){
        count++
      }
    })
    
    if(count > 2){
      return 'I smell a series!'
    } else if(count >= 1){
      return 'Publish!'
    } else {
      return 'Fail!'
    }
}