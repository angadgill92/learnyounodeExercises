var http = require('http')
var fs   = require('fs')

var port       = Number(process.argv[2])                  //stores the given portNumber
var filePath   = process.argv[3]                          //stores the file path
var fileStream =  fs.createReadStream(filePath)           //create file stream from the given file

var server = http.createServer( function (request, response) {

  response.writeHead(200, { 'content-type': 'text/plain' })// return response head
  fileStream.setEncoding('utf8')                           // set encoding = utf8 to make it readable
  fileStream.pipe(response)                                // pipe the readable fileStream to the writable response stream
})

server.listen(port)                                        // make the server listen to the specified port
