// Problem Solving Steps

// Sum 2 numbers
//	1. Write problem in own words.
// 	write a function that sums numbers
//	2. What are the inputs of the problem?
// 	-ints?
// 	-floats?
//  -how big?
// 	-strings?
//	3. What are the outputs?
//  the addition of both numbers
//	4. Can the putputs be determined frmo the input or do i have enough info to solve the problem?
// 	yes
//	5. How should i label the important pieces of data that are a part of the problem?
// node

// Character Counter

const charCount = (str) => {
    const count = {};

    if (str === "" || typeof str !== "string")
        return console.log({ Error: "Invalid input." });

    for (let char of str) {
        char = char.toLowerCase();
        if (char.match(/[0-9a-z]/)) {
            count[char] = ++count[char] || 1;
        }
    }

    console.log(count);
};

// charCount(1);

// const arr = [1, 2, 3];
// const sArr = [1, 9, 4];

const same = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return console.log(false);

    const checker = {};
    let result = true;

    for (let n of arr1) {
        checker[n ** 2] = ++checker[n ** 2] || 1;
    }

    for (let n of arr2) {
        if (checker[n]) --checker[n];
        else return console.log(false);
    }

    return console.log(result);
};

// same(arr, sArr);

const anagram = (str1, str2) => {
    if (str1.length !== str2.length) return console.log(false);

    const checker = {};

    for (let char of str1) {
        checker[char] = ++checker[char] || 1;
    }

    for (let char of str2) {
        if (checker[char]) --checker[char];
        else return console.log(false);
    }

    return console.log(true);
};

// anagram("qwerty", "ytrewq");

const fact = (n) => {
    do_fact(1, n);
};

const do_fact = (acc, num) => {
    if (num === 0) return console.log(acc);
    else do_fact(acc * num, --num);
};

// fact(5000);

// const arr = [-4, -2, -1, 0, 1, 2, 3];

const zeroSum = (arr) => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) return console.log([arr[left], arr[right]]);
        sum < 0 ? ++left : --right;
    }
};

// zeroSum(arr);

// const arr = [1, 1, 1, 1, 2, 3, 3,4,5,6,7,8,9];

const countUnique = (arr) => {
    let lo = 0;
    let hi = 1;
    let count = 0;

    while (hi < arr.length) {
        if (arr[lo] !== arr[hi] && arr[lo + 1] !== arr[hi + 1]) count++;
        ++lo;
        ++hi;
    }
    return console.log(count);
};

// countUnique(arr);
// const arr = [-3, -2, -1, 0, 4, 5, 6, 3, 4, 5, 6, 7, 1, 2, 3];

const maxSubArrSum = (arr, size) => {
    let maxSum = -Infinity;
    let tempSum = 0;

    for (let i = 0; i < size; i++) {
        tempSum += arr[i];
    }

    for (let i = 0; i < arr.length - size; i++) {
        tempSum = tempSum - arr[i] + arr[i + size];
        maxSum = Math.max(tempSum, maxSum);
    }

    console.log(maxSum);
};

// maxSubArrSum(arr, 2);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const binarySearch = (arr, num) => {
    let lo = 0;
    let hi = arr.length - 1;

    while (hi > lo) {
        let middle = Math.round((hi + lo) / 2);
        if (arr[middle] === num)
            return console.log(`Found it on index ${middle}`);
        arr[middle] > num ? (hi = middle) : (lo = middle);
    }

    return console.log("Number not found");
};

// binarySearch(arr, 19);

// Exer

const sameFreq = (num1, num2) => {
    const counter = {};
    num1 = num1.toString();
    num2 = num2.toString();

    for (let char of num1) {
        counter[char] ? ++counter[char] : (counter[char] = 1);
    }

    for (let char of num2) {
        if (counter[char]) --counter[char];
        else return console.log(false);
    }

    return console.log(true);
};

// sameFreq(182, 128)

const hasDuplicates = (arr) => {
    const counter = {};

    for (let char of arr) {
        if (!counter[char]) counter[char] = true;
        else return true;
    }

    return false;
};

// console.log(hasDuplicates([1,2,3,3]))

const averagePair = (arr, avr) => {
    let lo = 0;
    let hi = arr.length - 1;

    while (hi > lo) {
        if ((arr[lo] + arr[hi]) / 2 === avr) return true;
        (arr[lo] + arr[hi]) / 2 > avr ? --hi : ++lo;
    }
    return false;
};

// console.log(averagePair([1, 2, 3], 2.5));

const isSubsequence = (str1, str2) => {
    let index = 0;
    for (let char of str2) {
        if (char === str1[index]) index++;
    }
    return index === str1.length;
};

// pending
const longestSubstring = (str) => {
    let max = 0;
    let window = {};

    for (let char of str) {
        let temp = 0;
        if (!window[char]) {
            temp++;
            window[char] = 1;
        } else temp = 0;
        max = Math.max(temp, max);
    }
    return max;
};

// console.log(longestSubstring("hello madafakaaaa"));⁄

// const

// Facebook Question:
// input
// Airplane flight overlap
// [[2,5], [3,7], [8,9]] -> 2

// [
//     [2,5],
//     [3,7],
//     [8,9],
// ]

// const flightOverlap = arr => {
//     let overlap = 0;

// }

const count_down = (n) => {
    console.log(n);
    if (--n > 0) count_down(n);
};

// count_down(5);

const sum_range = (n) => {
    const do_sum = (acc, n) => {
        if (n <= 0) console.log(acc);
        else do_sum(acc + n, --n);
    };

    do_sum(0, n);
};

// sum_range(3);

const factorial = (n) => {
    const do_fact = (acc, num) => {
        if (num <= 1) console.log(acc);
        else do_fact((acc *= n), --n);
    };

    do_fact(1, n);
};

// factorial(5);

const fibbonacci = (n) => {
    const do_fib = (curr, prev, count) => {
        if (count === n) console.log(prev);
        else do_fib(curr + prev, curr, count + 1);
    };

    do_fib(1, 0, 0);
};

// fibbonacci(14);

const power = (num, pow) => {
    if (pow === 0) return console.log(1);

    const do_pow = (acc, count) => {
        if (count === pow) console.log(acc);
        else do_pow(acc * num, count + 1);
    };

    do_pow(1, 0);
};

// power(2, 6)

const prod_of_array = (arr) => {
    let acc = 1;
    const do_prod = (arr) => {
        if (arr.length === 0) console.log(acc);
        else {
            acc *= arr[0];
            do_prod(arr.slice(1));
        }
    };

    do_prod(arr);
};

// prod_of_array([1, 2, 3, 10]); // -> 60:

const sum_of_array = (arr) => {
    let acc = 0;
    const do_sum = (arr) => {
        if (arr.length === 0) console.log(acc);
        else {
            acc += arr[0];
            do_sum(arr.slice(1));
        }
    };

    do_sum(arr);
};

// sum_of_array([1, 2, 3, 10]); // -> 16:

const reverse = ()