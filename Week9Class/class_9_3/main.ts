function firstElement<T> (arr: T[]) {
    return arr[0]
}

console.log(firstElement<number>([10, 20]))
console.log(firstElement<string>(['somdeb', 'piks']).toUpperCase())