// Ex input -> [1,2,3], [9,1,4]
const equalToSquared = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return console.log(false);

    const store = {};
    arr1.forEach((elem) => (store[elem ** 2] = false));
    arr2.forEach((elem) => (store[elem] = true));

    for (const key in store) {
        if (store[key] === false) return console.log(false);
    }

    console.log(true);
};
// equalToSquared([1,2,3], [9,1,4])

// ------------------------>
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears
// more than ⌊n / 2⌋ times. You may assume that the
// majority element always exists in the array.

const majorityElement = (nums) => {
    const store = {};
    let majority = { num: 0, reps: 0 };

    const count = (num) => (store[num] ? ++store[num] : (store[num] = 1));

    nums.forEach(count);

    for (const key in store) {
        if (store[key] > majority.reps) {
            majority.num = key;
            majority.reps = store[key];
        }
    }

    return majority.num;
};

// console.log(majorityElement([3,2,3]))

// ----------------------->
// Given an integer array of size n, find all elements that
// appear more than ⌊ n/3 ⌋ times.

const moreThanAThird = (nums) => {
    const store = {};
    const len = nums.length;
    const majority = [];

    const count = (num) => (store[num] ? ++store[num] : (store[num] = 1));

    nums.forEach(count);

    for (const key in store) {
        if (store[key] > len / 3) majority.push(key);
    }

    return majority;
};

// console.log(moreThanAThird([3,2,3]))

// You are playing the Bulls and Cows game with your friend.

// You write down a secret number and ask your friend to guess what the
// number is. When your friend makes a guess, you provide a hint with
// the following info:

// The number of "bulls", which are digits in the guess that are in the
// correct position.
// The number of "cows", which are digits in the guess that are in your
// secret number but are located in the wrong position. Specifically, the
// non-bull digits in the guess that could be rearranged such that they
// become bulls.
// Given the secret number secret and your friend's guess guess,
// return the hint for your friend's guess.

// The hint should be formatted as "xAyB", where x is the number of
// bulls and y is the number of cows. Note that both secret and guess
// may contain duplicate digits.

const bullsAndCows = (secret, guess) => {
    let bulls = 0;
    let cows = 0;
    const guess_store = {}
    const secret_store = {}
    const count = (char, store) => (store[char] ? ++store[char] : (store[char] = 1));
    const countBulls = (char, i) => {
        if (secret[i] === guess[i]) {
            ++bulls;
            --guess_store[char];
            --secret_store[char];
        }
    };

    guess.split("").forEach(char => count(char, guess_store))
    secret.split("").forEach(char => count(char, secret_store))
    guess.split("").forEach(countBulls)

    for (const key in guess_store) {
        if(secret_store[key]) {
            const amount = guess_store[key] >= secret_store[key]
                ? secret_store[key]
                : guess_store[key]
            cows += amount
        }
    }

    return `${bulls}A${cows}B`;
};

// console.log(bullsAndCows("1807", "7810"))

// ---------------------->
// Given an integer array nums and an integer k, return the k most 
// frequent elements. You may return the answer in any order.

const nMostFreq = (nums, n) => {
    const store = {}
    const count = n => store[n] 
        ? store[n] = {num: n, freq: ++store[n].freq}
        : store[n] = {num: n, freq: 1}

    nums.forEach(count)

    return Object.keys(store).sort((a, b) => {
        return store[a].freq - store[b].freq
    }).slice(-n)
}

// console.log(nMostFreq([1,1,1,2,2,3,4,4,4,4,4,5,5,5,5,7,6,6], 2))

const isAnagram = (str1, str2) => {
    const store = {}
    const count = char => store[char] ? ++store[char] : store[char] = 1

    str1.split("").forEach(count)

    for (const char of str2.split("")) {
        if (store[char]) {
            --store[char]
        } else return console.log("false")
    }

    for(const key in store) {
        if (store[key] !== 0) return console.log("false")
    }

    return console.log("true")
}

// isAnagram("test", "test")