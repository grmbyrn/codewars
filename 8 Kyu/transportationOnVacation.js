function rentalCarCost(d){
    if(d < 3){
        return 40 * d
    } else if(d < 7){
        return 40 * d - 20
    } else if(d >= 7){
        return 40 * d - 50
    }
}