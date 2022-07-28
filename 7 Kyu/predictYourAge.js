// My grandfather always predicted how old people would get, and 
// right before he passed away he revealed his secret!

// In honor of my grandfather's memory we will write a function using his formula!

// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    let newArr = [age1,age2,age3,age4,age5,age6,age7,age8]
    return Math.floor(Math.sqrt(newArr.map(age => age * age).reduce((acc, c) => acc + c, 0)) / 2)
}

predictAge(65,60,75,55,60,63,64,45)
console.log(86)