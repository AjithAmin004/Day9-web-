//make a folder inside same directory of this file and in that folder make a text file with content
//new file has been made

let fs = require('fs');
let path = require('path');

if(!fs.existsSync("newDir"))
{
   fs.mkdirSync("newDir");
}
// if(!fs.existsSync("directory")){
//     fs.mkdirSync("directory")
//   }
let adds = path.join(__dirname,"newDir","new.txt");

fs.writeFileSync(adds,"new file has been made");