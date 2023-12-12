function asyncWrapper() {
    return new Promise(function(resolve) {
        setTimeout(dummy_func, 3000);
    });
}

function dummy_func() {
    console.log("You are now inside the dummy function!");
}

async function main() {
    let value = await asyncWrapper();
    // sample = new Promise(function(resolve) {
    //     setTimeout(dummy_func, 3000);
    // });
    // let value = await sample;
}
main();
console.log("This log code was written at the end of the file.");