const fs = require('fs');

const   input = process.argv

console.log(process.argv)
if(input[2] == 'add'){
    fs.writeFileSync(input[2], input[3])

}else if(input[2] == 'remove'){
        fs.unlinkSync(input[3])
}
