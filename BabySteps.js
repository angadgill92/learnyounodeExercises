var array = process.argv.slice(2) // stores the arguments after the node and path arguments

console.log(array
  .map(function (a) { // converts every element of 'array' to a number
    return Number(a)
  })
  .reduce(function (a, b) { // returns the sum of all the elements
    return a + b
  }, 0))
