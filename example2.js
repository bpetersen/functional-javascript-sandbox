const R = require('ramda')
const S = require('sanctuary')

console.log('** Example 2: Sanctuary **\n')

const words = ['one', 'two', 'three']
const numbers = [1, 2, 3, 4]
const empty = []

const log = msg => val => {
  console.log(msg, val)
  return val
}

const getBigFirstWordSanctuary = S.pipe([
  log('first'),
  S.head,
  log('second'),
  //S.toUpper,  //What happens if you use this instead of the line below?
  S.map(S.toUpper),
  log('third'),
])

//getBigFirstWordSanctuary(words)
//getBigFirstWordSanctuary(empty)
//getBigFirstWordSanctuary(numbers)

//Also, getting information about a function is easy!
//Compare logging out a Ramda function
//console.log(R.map)
//console.log(R.map.toString())

//with a function from Sanctuary
//console.log(S.toUpper)
//console.log(S.map)
//console.log(S.head)
//console.log(S.compose)
