/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    return new Promise(function(resolve) {
        // start_time = new Date();
        setTimeout(function () {
            // ans = new Date() - start_time;
            // console.log("This is inside wait 1");
            // resolve(ans);
            resolve();
        }, t*1000);
    });
}

function wait2(t) {
    return new Promise(function(resolve) {
        // start_time = new Date();
        setTimeout(function () {
            // ans = new Date() - start_time;
            // console.log("This is inside wait 2");
            // resolve(ans);
            resolve();
        }, t*1000);
    });

}

function wait3(t) {
    return new Promise(function(resolve) {
        // start_time = new Date();
        setTimeout(function () {
            // ans = new Date() - start_time;
            // console.log("This is inside wait 3");
            // resolve(ans);
            resolve();
        }, t*1000);
    });

}

function calculateTime(t1, t2, t3) {
    // return wait1(t1).then(wait2(t2));
    // console.log(p1);
    // const p2 = p1.then(wait2(t2));
    start_time = new Date();
    return wait1(t1).then(function (result) {
        // console.log(result);
        return wait2(t2);
    }).then(function (result) {
        // console.log(result);
        return wait3(t3);
    }).then(() => {
        return new Date() - start_time;
    });
}

// console.log(calculateTime(5, 5, 5));
module.exports = calculateTime;
