const fs = require('fs');

const   input = process.argv

console.log(process.argv)

fs.writeFileSync(input[2], input[3])
