function largestPairSum (numbers) {
    //TODO: Write your Code here
    let max = Math.max.apply(null, numbers)
    numbers.splice(numbers.indexOf(max), 1)
    let secondMax = Math.max.apply(null, numbers)
    numbers.splice(numbers.indexOf(max), 1)
    return max + secondMax
}

// function largestPairSum(numbers){
//     numbers.sort(function(a, b){ return b - a });
//     return numbers[0] + numbers[1];
// }