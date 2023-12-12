/*Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

(Hint: setTimeout)
*/
console.log("Hello World!");
console.log("Counter will start now");
let counter = 0;
setInterval(function(){
    console.log(`Counter is at ${counter}. Time - ${new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour12: true })}`);
    counter += 1;
}, 2000);

