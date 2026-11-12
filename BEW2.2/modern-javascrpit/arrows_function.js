// Arrow function syntax
const multiply = (a , b) => a * b
/*
// Wrong Situation
// never declare arrow function with a "let" keywords
// let multiply = (a, b) => a * b
*/


// Traditional function syntax
function traditionalMultiply(a, b){
    return a * b 
}



// Display all items from an argument 
const displayAll = (arr) => {
    for (const items of arr){
        console.log(item)
    }

}

const phones = ["Iphone" , "Samsung" , "Oppo"]


const convertCMtoM = (cm) => {
    const m = cm / 100
    return m

}

const lengthOfCarInCm = 300
console.log(convertCMtoM(lengthOfCarInCm))

// Write an arrow function that converts kgs lbs, then returns the result.
// My answer
const convertKGStoLBS = (kgs) => {
    const lbs = kgs * 2.205
    return lbs

}

const massOfObjectInKgs = 50
console.log(convertKGStoLBS(massOfObjectInKgs))

// Teacher Answer -short hand method
const convertKgToPounds = (lbs) => lbs * 2.20

const dTrump = 108
const dTrumpInPounds = convertKgToPounds(dTrump)
console.log(dTrumpInPounds)