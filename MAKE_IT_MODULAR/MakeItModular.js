var listFilteredFiles = require('./module')
var directory = process.argv[2]
var extension = process.argv[3]

function prints (err, data) {
  // function to print any data given to it in the console

  if (err) {
    console.log(err + 'Error')
  } else {
    data = data.join('\n'); /* this line is specific to the question, it turns
                            the received array object to a string separated by
                            '\n'
                             */
    console.log(data);
  }
}

listFilteredFiles(directory, extension, prints) // calling the module with directory extension and callback
