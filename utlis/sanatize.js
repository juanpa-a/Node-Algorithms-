// regex sanitization

// remove non-alphanumeric
str.replace(/[^a-z0-9]/gi, '')

// remove white space
str.replace(/\s/g, '')

// count values in object
const count = (val, store) => store[val] 
    ? (++store[val]) 
    : (store[val] = 1);

// const store = {}
// const count = (val) => store[val] 
//     ? (++store[val]) 
//     : (store[val] = 1);