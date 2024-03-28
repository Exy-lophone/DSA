function addBinaryArr (binary_arr_1,binary_arr_2) {
    if(binary_arr_1.length !== binary_arr_2.length) return "Both array must have the same length"

    const a = [...binary_arr_1].reverse()
    const b = [...binary_arr_2].reverse()
    const c = Array(a.length + 1).fill(0)

    for(let i = 0; i < a.length; i++) {
        c[i] = a[i] + b[i] + c[i]
        if(c[i] > 1)
        {
            c[i+1] = 1
            c[i] = c[i] === 2 ? 0 : 1
        } 
    }

    return c.reverse()
}

console.log(addBinaryArr([0,1,0,1],[1,0,0,1]))