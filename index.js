const { insertionSort } = require('./Sorting/insertion')
const { mergeSort }= require('./Sorting/merge')
const { rndArrays, rndArr } = require('./utils/random')

const sortMult = (arrays, sortFunc) => arrays.map(x => ({unsorted: x, sorted: sortFunc(x)})) 

const toSort = rndArrays(5,21,0,100)

console.log(sortMult(toSort,mergeSort))
