var array = process.argv.slice(2).map(Number).reduce((a,b)=> a+b) // stores the arguments after the node and path arguments

console.log(array)
