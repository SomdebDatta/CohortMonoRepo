/*Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

(Hint: setTimeout)
*/
function counter() {
    console.log("Counter will start now");
    let counter= 0;
    
    function counter_func() {
        
        setTimeout(function(){
            console.log(`Counter is at ${counter}. 24 hour clock - ${new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour12: false })}`);
            counter += 1;
            counter_func();
        }, 1000);
        
        
    }
    counter_func();
}

module.exports = {counter};
