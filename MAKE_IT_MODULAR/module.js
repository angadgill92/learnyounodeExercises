var fs = require('fs')
var path = require('path')

module.exports = function (directory, extension, callback) {
  extension = '.' + extension; // prepends a . to the extension passed

  fs.readdir(directory, function (err, list) {
    /* function that converts the array of filenames received from fs.readdir
    to a string joined by newLine characters */
    if (err) {
      callback(err) // error handling like a noob
    } else {

      var filelist = list.filter(function (file) { // filter files according to their extension
        return path.extname(file) === extension}) 
      callback(null, filelist) // call the call back function with the filtered files
    }
  })
}
