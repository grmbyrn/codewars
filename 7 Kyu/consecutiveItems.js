function consecutive(arr, a, b){
    let index1 = arr.indexOf(a)
    let index2 = arr.indexOf(b)

    let diff = Math.abs(index1 - index2)

    if(diff > 1){
        return false
    } else {
        return true
    }
}