// Write a function "sumNumbers" which is given an array of numbers and returns
// the sum of the numbers.
// Example:
// sumNumbers([1, 4, 8]) --> 13

function sumNumbers(numbers){
    // Sums all the numbers in the array
    var sum = 0, len = numbers.length;
    for(var i = 0; i < len; i ++){
        sum += numbers[i];
    }
    return sum;
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "positiveNumbers" which is given an array of numbers and
// returns a new array containing only the positive numbers within the given array.
// Examples:
// positiveNumbers([1, -3, 5, -3, 0]) --> [1, 5, 0]
// positiveNumbers([1, 2, 3]) --> [1, 2, 3]
// positiveNumbers([-1, -2, -3]) --> []

function positiveNumbers(numbers){
    // Sums all the positive values pf the array only
    var len = numbers.length, pos = [];
    for(var i = 0; i < len; i ++){
        if(numbers[i] >= 0){ // Checks if element is positive
            pos.push(numbers[i]);
        }
    }
    return pos;
}