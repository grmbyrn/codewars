function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    if(dolphin){
        sharkSpeed /= 2
    }
    return pontoonDistance / youSpeed < sharkDistance / sharkSpeed ? 'Attack' : 'Shark Bait'
}

console.log(shark(12, 50, 4, 8, true))