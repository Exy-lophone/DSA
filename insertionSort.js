const rndNbr = (from, to) => Math.floor(Math.random()* (to - from) + from)

const toSort = [
    Array(20).fill(1).map(() => rndNbr(0, 100)),
    Array(20).fill(1).map(() => rndNbr(0, 100)),
    Array(20).fill(1).map(() => rndNbr(0, 100)),
    Array(20).fill(1).map(() => rndNbr(0, 100)),
    Array(20).fill(1).map(() => rndNbr(0, 100)),
]

function insertionSort (toSort) {
    const arr = [...toSort]
    for(let i = 1; i < arr.length; i++) {
        const key = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = key
    }

    return arr
}

console.log(toSort.map(x => ({unsorted: x, sorted: insertionSort(x)})))