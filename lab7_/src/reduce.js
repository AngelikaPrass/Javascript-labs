const arr = [
    { key: 0, x: [4,5,6], y: [1,2,3,4]},
    { key: 0, x: [1], y: [] }
]
const result = arr.reduce(function(acc, curr) {
    return acc + curr.x.length + curr.y.length
}, 0)

console.log(result)