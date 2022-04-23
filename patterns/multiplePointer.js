// looks for the first pair that sums 0
// in a sorted list
const sumZero = (arr) => {
    let head = 0
    let tail = arr.length - 1
    let sum = arr[head] + arr [tail]

    while(tail > head && sum !== 0) {
        sum > 0 ? --tail : ++head
        sum = arr[head] + arr[tail]
    }

    return [arr[head], arr[tail]]
}

// console.log(sumZero([-4,-3,-2,-1,0,1,2,5]))

// const mostWater = (arr) => {
//     let head = 0
//     let tail = arr.length - 1
//     const calcWater = () => {
//         const base = tail - head
//         const tall = arr[tail] > arr[head]
//             ? arr[head]
//             : arr[tail]
//         return base * tall
//     }
//     let sum = arr[head] + arr [tail]


//     while(tail > head) {
//         sum > 0 ? --tail : ++head
//         sum = arr[head] + arr[tail]
//     }

//     return sum
// }

// console.log(mostWater([1,8,6,2,5,4,8,3,7]))

// const countUniqueValues = (arr) => new Set(arr).size
// console.log(countUniqueValues([1,2,2,3,4,5,5]))

const maxSubArraySum = (nums, n) => {
    if (nums.length < n) return null
    let maxSum = 0;
    const calcWindow = (nums, n, i) => nums.slice(i, i+n).reduce((acc, val) => acc+val)

    for (let i = 0; i < nums.length - (n - 1); i++) {
        const currSum = calcWindow(nums, n, i)
        if (currSum > maxSum) maxSum = currSum
    }

    console.log(maxSum)
}

// maxSubArraySum([2,6,9,2,1,8,5,6,3], 3)