console.log("Hello World!");
console.log("Counter will start now");
let counter= 0;

function counter_func() {
    
    setTimeout(function(){
        counter += 1;
        console.log(`Counter is at ${counter}. Time - ${new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour12: true })}`);
        counter_func();
    }, 2000);
    console.log("This is the while loop log");
    
    
}
counter_func();