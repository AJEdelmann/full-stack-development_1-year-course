// Write a function, squareNums(), that takes in an array of numbers and, using .map(), returns an array with the square of each of the elements of that array.

const numbers = [2, 7, 9, 171, 52, 33, 14];

const toSquare = num => num * num

const squareNums = arr => arr.map(toSquare) 
console.log(squareNums(numbers));

/*
// Using an anonymous function:
const squareNums = arr => arr.map(e => e * e)

// As a function declaration plus using our named function:
function squareNums(arr) {
    return arr.map(toSquare)
}
*/