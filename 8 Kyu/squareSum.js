function squareSum(numbers){
    return numbers.map(x => x * x).reduce((acc, c) => acc + c, 0)
}