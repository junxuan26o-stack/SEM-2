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

// Arrow Function in Callbacks
// What are callbacks?
// Example of callbacks

// .filter(), .map(), .reduce -> Array methods to do specific actions
// .filter -> is to find only the element that fit the specified criteria
// .map -> is essentially behaves like a for ... of loop but simpler
// it will also create a new array
// .reduce -> Used for calculating total  / accumulation of value

const list = [2, 4, 6, 8]
const list2 = list.filter(num => num > 5)
console.log(list2)

// This is a callback 
const listMultiplied = list.map(num => num * 2)
console.log(listMultiplied)


// Example without arrow function in callback
const listSquared = list.map(function(num){
    return  num * num
})
console.log(listSquared) 

const sum = list.reduce((total, num) => total + num, 0)
console.log(`The result of .reduce is ${sum}`)

// A product of the array using .reduce method, in arrow function format

const product = list.reduce((product, num) => product * num, 1 )
console.log(`The result of product is ${product}`)


