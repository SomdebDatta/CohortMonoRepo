function findSum(n=100) {
    let sum = 0;
    for (i=1;i<=n;i++) {
        sum += i;
    }
    console.log(sum);
    return sum;
}
setTimeout(findSum, 3000);
console.log("Hello World!");