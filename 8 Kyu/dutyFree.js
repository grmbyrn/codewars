function dutyFree(normPrice, discount, hol){
    let percent = (discount / 100) * normPrice
    let total = Math.floor(hol / percent)
    return total
}