// Problem Solving Steps

//	1. Write problem in own words.
//	2. What are the inputs of the problem?
//	3. What are the outputs?
//	4. Can the outputs be determined frmo the input or do
//     i have enough info to solve the problem?
//	5. How should i label the important pieces of data that are
//     a part of the problem?

const countChars = (text) => {
    const store = {};
    const count = (char) => (store[char] ? ++store[char] : (store[char] = 1));

    text.replace(/[^a-z0-9]/gi, "") // remove non-alphanumeric chars
        .toLowerCase()
        .split("")
        .forEach(count);

    console.table(store);
};

// countChars("piripitiflautica");

const newYearChaos = (arr) => {
    let chaos = false;
    let bribes = 0;

    const swap = () => {

    }

    console.log(chaos ? "Too chaotic" : bribes);
};

newYearChaos([2, 1, 5, 3, 4]);
newYearChaos([2, 5, 1, 3, 4]);

newYearChaos([1, 2, 3, 4, 5, 6, 7, 8])
newYearChaos([1, 2, 5, 3, 7, 8, 6, 4])
