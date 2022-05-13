function countPositivesSumNegatives(input) {
    let positive = 0
    let negative = 0
    
    if(input === null || input.length === 0){
      return []
    } else {
      input.forEach(num => num > 0 ? positive++ : negative += num)
    }
  return Array(positive, negative)
}