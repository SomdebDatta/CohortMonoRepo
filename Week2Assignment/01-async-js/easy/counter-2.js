console.log("Hello World!");
console.log("Counter will start now");
let counter = 0;
setInterval(function(){
    console.log(`Counter is at ${counter}. Time - ${new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour12: true })}`);
    counter += 1;
}, 2000);

