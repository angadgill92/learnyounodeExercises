var net = require('net') // import th enet module
var portNumber = Number(process.argv[2]) // port number provided as 1st argument

var date = new Date()
date = [ date.getFullYear(), // store date in an array
  date.getMonth() + 1,
  date.getDate(),
  date.getHours(),
  date.getMinutes() ].map(String)
// code to pad month and date if they are single digited
function padZero (str) {
  if (str.length === 1) {
    str = 0 + str
    return str
  } else {
    return str
  }}

for (i = 1; i < date.length; i++) {
  date[i] = padZero(date[i])
}
// code to convert date into YYYY-MM-DD HH:MM format
var dateString = date.slice(0, 3).join('-') // to make YYYY-MM-DD
  + ' ' // add space between date and time
  + date.slice(3).join(':') // to make HH:MM
  + '\n' // newline character at the end
// code to handle socket
function listener (socket) { // listener function
  socket.end(dateString) // write date to socket and end connection
}
// create a server instance
var server = net.createServer(listener) // creating a server
server.listen(portNumber) // listen to the port provided as argument
