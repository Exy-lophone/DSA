const rndNbr = (from, to) => Math.floor(Math.random()* (to - from) + from)
const rndArr = (size, from, to) => Array(size).fill(1).map(() => rndNbr(from, to))
const range = (from, to) => Array(to - from + 1).fill(1).map((x, i) => i+from)
const rndRange = (from, to) => {
    let arr = range(from,to)
    const result = []
    while(arr.length > 0) {
        const i = rndNbr(0,arr.length)
        result.push(arr[i])
        arr = [...arr.slice(0,i),...arr.slice(i+1,arr.length)]
    }
    return result
}
const rndArrays = (length, size, from, to) => Array(length).fill(1).map(() => rndArr(size,from,to))


module.exports = {
    rndNbr,
    rndArr,
    range,
    rndRange,
    rndArrays
}