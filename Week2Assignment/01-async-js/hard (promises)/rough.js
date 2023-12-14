function hello() {
    console.log("Hello World!")
    return new Promise(function(resolve) {
        resolve("Done scenes.")
    })
};

function hello2() {
    console.log("Hello World2!")
};

function hello3() {
    console.log("Hello World3!")
};

const promise = hello();
console.log(promise);
// const promise2 = promise.then(hello2).then(hello3);
// const promise3 = promise2.then(hello3);