let logs = [
    "88 99 200",
    "88 99 300",
    "99 32 100",
    "12 12 15"
];

const processLogs = (logs, threshold) => {
    const store = {};
    const outliers = [];
    const count = (val) => (store[val] ? ++store[val] : (store[val] = 1));

    logs.forEach((l) => {
        [sender, recipient] = l.split(" ");
        if (sender === recipient) {
            count(sender);
        } else {
            count(sender);
            count(recipient);
        }
    });

    for (const key in store) {
        if (store[key] >= threshold) outliers.push(key);
    }

    console.log(outliers);
};

const dfs = (v, list,  seen = {}, path = []) => {
    if (!v) return null;
    seen[v] = true;
    path.push(v);
    list[v].forEach((n) => (!seen[n] ? dfs(n, list, seen, path) : null));
    return path;
};

const userMatrix = [
    [1, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 1],
];

const removeNulls = (n) => n !== null;
const extractRelations = (c, i) => (c ? i.toString() : null);
const mapToObject = (acc, val, i) => {
    acc[i] = val;
    return acc;
};

const convertToAdjacentList = (matrix) => {
    return matrix
        .map((row) => row.map(extractRelations).filter(removeNulls))
        .reduce(mapToObject, {});
};

const countGroups = (matrix) => {
    const seen = {}
    const groups = []

    for (let i = 0; i < matrix.length; i++) {
        if(!seen[i]) groups.push(dfs(i.toString(), convertToAdjacentList(matrix), seen));
    }

    console.log("The amount of groups is:", groups.length)
};

countGroups(userMatrix);