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

module.exports = {
    insertionSort,
}