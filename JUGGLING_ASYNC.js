/*
This problem is the same as the previous problem (HTTP COLLECT) in that
you need to use http.get(). However, this time you will be provided with
three URLs as the first three command-line arguments.

You must collect the complete content provided to you by each of the URLs
and print it to the console (stdout). You don't need to print out the
length, just the data as a String; one line per URL. The catch is that you
must print them out in the same order as the URLs are provided to you as
command-line arguments.
*/


var http = require('http') // import http module
var bl = require('bl')     // import bl module
var results = []           // create empty array to store data in
var count = 0              // initialize count = 0

function printData () {    // function to print data stored in the results array
  for (var i = 0; i < 3; i++)
    console.log(results[i])
}

function httpGet (index) { // wrpper function to store the http get method
  http.get(process.argv[2 + index], function (response) { // http GET
    response.pipe(bl(function (err, data) {               // store incoming data to pipeline
      if (err){
        return console.error                              // error handling
      } else {

      results[index] = data.toString()                    // store data of current GET into results array
      count++                                             // increment count of the number of elements in results array

      if (count == 3)                                     // check if 'results' array has three elements
        printResults()                                    // print the contents of 'results' array
      }}))
  })
}

for (var i = 0; i < 3; i++) {                               // loop to get data from the 3 URL's provided
  httpGet(i)
}
