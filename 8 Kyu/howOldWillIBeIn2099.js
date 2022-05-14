function  calculateAge(a, b) {
    if(a - b === 1){
    return `You will be born in 1 year.`
    } else if(b - a === 1){
    return `You are 1 year old.`
    } else if(a < b){
    return `You are ${b - a} years old.`
    } else if (a > b){
    return `You will be born in ${a - b} years.`
    } else if (a === b){
    return `You were born this very year!`
    }
}