// read content of unorganised folder and make  an array which has extension name of each file

let fs = require('fs');
let path = require('path');

let nPath = path.join(__dirname,'..','unorganize')

let arr = fs.readdirSync(nPath);
let arr2 = [];
for(let i=0;i<arr.length;i++){
   let con = path.extname(arr[i]);
   arr2.push(con);
}
console.log(arr2)