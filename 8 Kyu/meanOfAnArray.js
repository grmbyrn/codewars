function getAverage(marks){
    const sum = marks.reduce((acc, c) => acc + c)
    const average = Math.floor(sum / marks.length)
    return average
}