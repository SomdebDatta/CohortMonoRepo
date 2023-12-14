const p1 = new Promise(function(resolve) {
    start_time = new Date();
    setTimeout(() => {
        console.log("This is inside setTimeout");
        ans = new Date() - start_time;
        resolve(ans);
    }, 1000)
    
})

p1.then((value) => {
    console.log(`Time - ${value}`);
});