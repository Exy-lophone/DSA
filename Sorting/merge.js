function merge (arr1, arr2) {
    const a = [...arr1]
    const b = [...arr2]
    const c = []

    while(a.length > 0 && b.length > 0) {
        if(a[0] > b[0]) c.push(b.shift())
        else c.push(a.shift())
    }

    while(a.length > 0) {
        c.push(a.shift())
    }

    while(b.length > 0) {
        c.push(b.shift())
    }

    return c
}

function mergeSort (arr) {
    if(arr.length === 1) return [...arr]
    const half = Math.floor(arr.length/2)
    const a = mergeSort(arr.slice(0,half))
    const b = mergeSort(arr.slice(half,arr.length))
    return merge(a,b)
}

module.exports = { mergeSort }