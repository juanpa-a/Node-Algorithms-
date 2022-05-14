// dragon story
const containsOddNumber = (arr, hasOddNumber = false) => {
    while (arr.length > 0 && !hasOddNumber) {
        arr[0] % 2 !== 0 ? (hasOddNumber = true) : arr.shift();
        containsOddNumber(arr, hasOddNumber);
    }
    return hasOddNumber;
};

// console.log(containsOddNumber([2, 2, 2, 2]));
const factorial = (n) => {
    if (n < 0) return null;
    if (n === 1 || n === 0) return 1;
    else return n * factorial(n - 1);
};

const fact = (n, acc = 1) => {
    if (n === 0) return acc
    return fact(n - 1, acc * n)
}

// console.log(factorial(8))

const fibonacci = (n) => {
    if (n < 0) return null;
    if (n === 0 || n === 1) return 1;
    else return fibonacci(n - 2) + fibonacci(n - 1);
};

const fib = (n, m = {}) => {
    if (n < 0) return null;
    if (n <= 1) return 1;
    return m[n] || (m[n] = fib(n - 2, m) + fib(n - 1, m));
};

const test = 690;
const t1 = performance.now();
const opFib = fib(test);
const t2 = performance.now();

console.log(
    `Call to optimized fibonacci took ${t2 - t1} milliseconds: ${opFib}`
);

const collectOddValues = (arr) => {
    let newArr = [];
    if (arr.length === 0) return newArr;
    if (arr[0] % 2 !== 0) newArr.push(arr[0]);
    return newArr.concat(collectOddValues(arr.slice(1)));
};

const hasOddNumber = (arr) => {
    let newArr = [];
    if (arr.length === 0) return newArr;
    if (arr[0] % 2 !== 0) newArr.push(arr[0]);
    return newArr.concat(hasOddNumber(arr.slice(1))).length ? true : false;
};

console.log(fact(6))