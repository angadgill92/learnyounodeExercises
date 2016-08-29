var http = require('http')                      // imports the http module
var bl   = require('bl')                        // imports the bl module


http.get(process.argv[2], function (response) { // http get method
  response.pipe(bl(function (err, data) {       // stores all data emitted by 'data' events in a pipe
    if (err) {                                  // error handling like a boss
      console.error
    } else {
      data = data.toString()                    // coverting input stream to readable string
      console.log(data.length)                  // prints out the number of characters in the data
      console.log(data)                         // printing it all out to the console
    }
  }))
})
