// count values in object
const countParamStore = (val, store) => store[val] 
    ? (++store[val]) 
    : (store[val] = 1);

const store = {}
const count = (val) => store[val] 
    ? (++store[val]) 
    : (store[val] = 1);