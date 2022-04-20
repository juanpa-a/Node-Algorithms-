// Problem Solving Steps

//	1. Write problem in own words.
//	2. What are the inputs of the problem?
//	3. What are the outputs?
//	4. Can the outputs be determined frmo the input or do 
//     i have enough info to solve the problem?
//	5. How should i label the important pieces of data that are 
//     a part of the problem?

const countChars = (str) => {
    const counter = {}
    const count = char => {
        if(counter[char]) counter[char] = ++counter[char]
        else counter[char] = 1
    }

    str
        .replace(/[^a-z0-9]/gi, '') // remove non-alphanumeric chars
        .toLowerCase()
        .split("")
        .forEach(count)

    console.table(counter)
}

countChars("piripitiflautica")