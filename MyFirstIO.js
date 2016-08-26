/*  Write a program that uses a single synchronous filesystem operation to
  read a file and print the number of newlines (\n) it contains to the
  console (stdout), similar to running cat file | wc -l.

  The full path to the file to read will be provided as the first
  command-line argument (i.e., process.argv[2]). You do not need to make
  your own test file. */

var fs = require('fs')

var linesInfile = fs.readFileSync(process.argv[2]).toString().split('\n').length - 1 ;
                  /* 1. fs.readFileSync takes the input file and converts it to
                        a buffer.

                     2. process.argv[2] holds the test file path.

                     3. toString() method converts the buffer to a string with
                        default UTF-8 encoding.

                     4. split() method splits the string into an array, it takes
                        the 'newline' character as the delimiter.

                     5. 'length' property returns the number of elements formed by
                        the split method.

                     6. We subtract 1 from because we are counting the number of
                        newline characters while the 'length' prpoerty returns the
                        number of lines and there is no newLine characters after
                        the last line
                  */

console.log(linesInfile)
