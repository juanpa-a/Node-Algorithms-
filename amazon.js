const findPasswordStrength = (password) => {
    let hasVowel = false;
    let hasConsonant = false;
    let strength = 0;
    const isVowel = (char) => ["a", "e", "i", "o", "u"].includes(char);

    password.split("").forEach((char) => {
        isVowel(char) ? (hasVowel = true) : (hasConsonant = true);
        if (hasVowel && hasConsonant) {
            hasVowel = false;
            hasConsonant = false;
            strength++;
        }
    });

    console.log(strength);
};

// console.log(findPasswordStrength("hackerrank"));
// console.log("tesssst");
// console.log(findPasswordStrength("thisisbeautiful"));
// thi si sbe aut if ul

// const dfs = (v, list, seen = {}, path = []) => {
//     if (!v) return null;
//     seen[v] = true;
//     path.push(v);
//     list[v].forEach((n) => (!seen[n] ? dfs(n, list, seen, path) : null));
//     return path;
// };

const matrix = [
    [1, 0, 0],
    [1, 0, 0],
    [1, 9, 1],
];

function findWay(pos, end, way) {
    if (way === undefined) way = [];

    if (pos[0] < 0 || pos[0] >= matrix.length) return null;
    if (pos[1] < 0 || pos[1] >= matrix[0].length) return null;

    if (pos[0] == end[0] && pos[1] == end[1]) return way;
    if (matrix[pos[0]][pos[1]] != 0) return null;

    matrix[pos[0]][pos[1]] = 1;
    way.push(pos);

    let res =
        findWay([pos[0] + 1, pos[1]], end, way) ||
        findWay([pos[0], pos[1] + 1], end, way) ||
        findWay([pos[0] - 1, pos[1]], end, way) ||
        findWay([pos[0], pos[1] - 1], end, way);

    if (res !== null) return res;

    matrix[pos[0]][pos[1]] = 0;
    way.pop();
    console.log(way);
    return null;
}

// console.log(findWay([0,0], [2,2]))

const removeNulls = (n) => n !== null;
const extractRelations = (c, i) => (c ? "1" : null);
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
    const seen = {};
    const groups = [];

    for (let i = 0; i < matrix.length; i++) {
        if (!seen[i])
            groups.push(dfs(i.toString(), convertToAdjacentList(matrix), seen));
    }

    console.log("The amount of groups is:", groups.length);
};

// console.log(dfs(area[0][0], convertToAdjacentList(area)))

// countGroups(area);

const dfsz = (v, list, seen = {}, path = []) => {
    if (!v) return null;
    seen[v] = true;
    path.push(v);
    list[v].forEach((n) => (!seen[n] ? dfs(n, list, seen, path) : null));
    return path;
};

const dfss = (v, matrix, seen = {}, path = []) => {
    if (!v) return null;
    let [i, j] = v;
    if (matrix[i][j] === 9) return console.log(path);
    seen[v.join("")] = true;
    path.push(v.join(""));

    if (matrix[i + 1] && matrix[j])
        dfss([matrix[i + 1], matrix[j]], matrix, seen, path);

    if (matrix[i] && matrix[j + 1])
        dfss([matrix[i], matrix[j + 1]], matrix, seen, path);

    if (matrix[i - 1] && matrix[j])
        dfss([matrix[i - 1], matrix[j]], matrix, seen, path);

    if (matrix[i] && matrix[j - 1])
        dfss([matrix[i], matrix[j - 1]], matrix, seen, path);
};

// dfss([0,0],area);

function findWay(pos, end, way) {
    if (way === undefined) way = [];

    if (pos[0] < 0 || pos[0] >= matrix.length) return null;
    if (pos[1] < 0 || pos[1] >= matrix[0].length) return null;

    if (pos[0] == end[0] && pos[1] == end[1]) return way;
    if (matrix[pos[0]][pos[1]] != 0) return null;

    matrix[pos[0]][pos[1]] = 1;
    way.push(pos);

    let res =
        findWay([pos[0] + 1, pos[1]], end, way) ||
        findWay([pos[0], pos[1] + 1], end, way) ||
        findWay([pos[0] - 1, pos[1]], end, way) ||
        findWay([pos[0], pos[1] - 1], end, way);

    if (res !== null) return res;

    matrix[pos[0]][pos[1]] = 0;
    way.pop();

    return null;
}

var deliveryPlan = function (allLocations, numDeliveries) {
    if (!allLocations.length || !numDeliveries) return [];
    let sortedByDist = allLocations.sort(
        (a, b) =>
            Math.sqrt(a[0] * a[0] + a[1] * a[1]) -
            Math.sqrt(b[0] * b[0] + b[1] * b[1])
    );
    return sortedByDist.slice(0, numDeliveries);
};

// console.log(deliveryPlan(area))

// const traversalDFS = (matrix) => {
//     if (!matrix.length) {
//         return [];
//     }
//     const values = [];
//     const seen = new Array(matrix.length)
//         .fill("")
//         .map(() => new Array(matrix[0].length).fill(false));
//     dfs(matrix, 0, 0, values, seen);
//     return values;
// };
// const dfs = (matrix, row, col, values, seen) => {
//     const invalidRow = row < 0 || row >= matrix.length;
//     const invalidCol = col < 0 || col >= matrix[0].length;
//     if (invalidRow || invalidCol || seen[row][col]) {
//         return;
//     }
//     seen[row][col] = true; // marked true so that not to visit this again
//     values.push(matrix[row][col]); // push visited element into values array
//     for (let dir of directions) {
//         dfs(matrix, row + dir[0], col + dir[1], values, seen);
//     }
// };

// console.log(traversalDFS(area));



const directions = [
    [-1, 0], //up
    [0, 1], //right
    [1, 0], //down
    [0, -1], //left
];

const area = [
    [1, 0, 0],
    [1, 0, 0],
    [1, 9, 1],
];

console.log(area[1][1]);

const search = (v, matrix, seen = {}, path = []) => {
    let [i, j] = v;
    if (!matrix[i][j]) return null;
    seen[v.join("")] = true;
    path.push(v);
    const go = (n) => {
        let [a, b] = [n];
        i += a;
        j += b;
        if (matrix[i] && matrix[i][j]) {
            search([i, j], matrix, seen, path);
        } else return null;
    };
    directions.forEach((n) => (!seen[n.join("")] ? go(n) : null));
    return path;
};

console.log(search([0, 0], area));

const dfszz = (v, list, seen = {}, path = []) => {
    if (!v) return null;
    seen[v] = true;
    path.push(v);
    list[v].forEach((n) => (!seen[n] ? dfs(n, list, seen, path) : null));
    return path;
};

const minimumDistance = (i,j,matrix, seen = {}, path = []) => {
    console.log("matrix", matrix)
    if(!matrix[i][j]) return null
    if(matrix[i][j] === 9) return path.length

    const coords = `${i}:${j}`
    console.log("coords", coords)
    seen[coords] = true
    path.push(coords)

    if(matrix[i+1] && matrix[i+1][j]) {
        minimumDistance(i+1, j, matrix, seen, path)
    }
    if(matrix[i-1] && matrix[i-1][j]) {
        minimumDistance(i-1, j, matrix, seen, path)
    }
    if(matrix[i] && matrix[i][j+1]) {
        minimumDistance(i, j+1, matrix, seen, path)
    }
    if(matrix[i] && matrix[i][j-1]) {
        minimumDistance(i, j-1, matrix, seen, path)
    }
}

console.log(minimumDistance(0, 0, area))