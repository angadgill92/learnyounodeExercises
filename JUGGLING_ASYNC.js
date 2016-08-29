/*
Initial ugly solution that works. 

*/

var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function (response) { // call back function to print data
  response.pipe(bl(function (err, data) { // stores all data emitted by 'data' events in a pipe
    if (err) { // error handling like a boss
      console.error
    } else {
      data = data.toString() // coverting input stream to readable string
      // console.log(data.length)                  // prints out the number of characters in the data
      console.log(data)
      http.get(process.argv[3], function (response) { // call back function to print data
        response.pipe(bl(function (err, data) { // stores all data emitted by 'data' events in a pipe
          if (err) { // error handling like a boss
            console.error
          } else {
            data = data.toString() // coverting input stream to readable string
            // console.log(data.length)                  // prints out the number of characters in the data
            console.log(data)
            http.get(process.argv[4], function (response) { // call back function to print data
              response.pipe(bl(function (err, data) { // stores all data emitted by 'data' events in a pipe
                if (err) {
                  console.error
                } else {
                  data = data.toString() // coverting input stream to readable string

                  console.log(data) // printing it all out to the console
                }
              }))
            })
          }
        }))
      })
    }
  }))
})
