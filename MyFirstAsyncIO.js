/*
Write a program that uses a single asynchronous filesystem operation to
read a file and print the number of newlines it contains to the console
(stdout), similar to running cat file | wc -l.

The full path to the file to read will be provided as the first
command-line argument.*/

var fs = require('fs')

var linesInfile = undefined
/* We initialize line count to undefined because we
   do not yet have the file and cannot possibly
   know how many lines it has.
*/

function prints (data) {
  console.log(data)
}
/* this will be our call back function, i.e  it
   will be called when the program has finished
   reading the input file and returned it.
*/

// function that counts the number of newline characters and calls back 'prints'
function newlineCount (callback) {
  fs.readFile(
    process.argv[2],
    function count (err, fileContents) {
      linesInfile = fileContents.toString().split('\n').length - 1
      callback(linesInfile)
    })
}

newlineCount(prints)
