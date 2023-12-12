/*Create a counter in JavaScript
We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second
*/

function sleep() {
    const start = new Date().getTime();
    while(new Date().getTime() - start < 1000);
    return;
}
function counter(limit) {
    for(let i=1; i<=limit; i++) {
        sleep();
        console.log(`Counter is at ${i} - Time - ${new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour12: false })}`);
    }
    
}

counter(10);