/*Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

(Hint: setTimeout)
*/
function counter() {
    console.log("Counter will start now");
    let counter = 0;
    setInterval(function(){
        console.log(`Counter is at ${counter}. 12 hour clock - ${new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour12: true })}`);
        counter += 1;
    }, 1000);
}

module.exports = {counter};
