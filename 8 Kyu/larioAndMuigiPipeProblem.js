function pipeFix(numbers){
    let arr = []
    let num = Number(numbers.slice(-1))
    for(let i = numbers[0]; i <= num; i++){
      arr.push(i)
    }
    return arr
}