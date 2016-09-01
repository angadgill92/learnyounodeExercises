var http = require('http')
var url = require('url')

function parsetime (time) {    // function to return parsedtime
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {  // function to return unixtime
  return { unixtime : time.getTime() }
}

var server = http.createServer(function (req, res) {   // creating a server
  var parsedUrl = url.parse(req.url, true)             // parsing the data in the requested url
  var time = new Date(parsedUrl.query.iso)             // passing the queried date to the Date object
  var result

  if (/^\/api\/parsetime/.test(req.url))          // using regular expressions to check the path
    result = parsetime(time)                      // if path has /api/parsetime , result = parsetime
  else if (/^\/api\/unixtime/.test(req.url))
    result = unixtime(time)                       // else if path has /api/unixtime. result =  unixtime

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))              // stringify the recieved JSON
  } else {
    res.writeHead(404)
    res.end()
  }
})
server.listen(Number(process.argv[2]))
