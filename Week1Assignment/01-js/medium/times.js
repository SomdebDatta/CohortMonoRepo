/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    let sum = 1;
    for (i=2; i<n; i++){
        sum+=i;
    }
    return sum;
}

const startTime = new Date();
console.log("Sum -", calculateTime(100));
const endTime = new Date();
const executionTime = endTime - startTime;
console.log("Execution time", executionTime,"milliseconds.");

const startTime2 = new Date();
console.log("Sum -", calculateTime(100000));
const endTime2 = new Date();
const executionTime2 = endTime2 - startTime2;
console.log("Execution time", executionTime2,"milliseconds.");

const startTime3 = new Date();
console.log("Sum -", calculateTime(1000000000));
const endTime3 = new Date();
const executionTime3 = endTime3 - startTime3;
console.log("Execution time", executionTime3,"milliseconds.");