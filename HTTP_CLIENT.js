var http = require('http')
// imports the http module

http.get(process.argv[2], function (response) {       // http get method
  response.setEncoding('utf8')                        // set encoding to utf8 to convert input stream to readable strings
  response.on('data', function (data){                // listener for 'data' emissions
    console.log(data);                                // prints the data emitted by each 'data' event
  })

})

/* official solution
var http = require('http')

http.get(process.argv[2], function (response) {
  response.setEncoding('utf8')
  response.on('data', console.log)
  response.on('error', console.error)
}).on('error', console.error)

Note to self :  Always handle errors !
*/
