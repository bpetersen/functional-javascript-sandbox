const R = require('ramda')

console.log('** Example 1: Vanilla vs Ramda **\n')

const words = ['one', 'two', 'three']
const numbers = [1, 2, 3, 4]
const empty = []

const log = msg => val => {
  console.log(msg, val)
  return val
}

const getBigFirstWordVanilla = words => words[0].toUpperCase()
// Typical Unsafe vanilla. To write this safely we have something more like:

const getBigFirstWordVanillaSafe = words => {
  if (!words || words.length < 1) return null
  return words[0].toUpperCase()
}
//console.log(getBigFirstWordVanilla(words))
//console.log(getBigFirstWordVanilla(empty))
//console.log(getBigFirstWordVanilla(numbers))

//And now with Ramda
const getBigFirstWordRamda = R.pipe(
  log('first'),
  R.head,
  log('second'),
  R.toUpper,
  log('third')
)
//getBigFirstWordRamda(words)
//getBigFirstWordRamda(empty)
//getBigFirstWordRamda(numbers)
