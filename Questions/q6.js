//read content of unorganised folder and print each file type
//for example abc.mp3 --> print Audio File
//            xyz.mp4 --> print Vidoe File
//            fsd.jpeg -> print Image File

let fs  = require('fs');
let path = require('path');

let sPath = path.join(__dirname,"..","unorganize");
let content  = fs.readdirSync(sPath);

let obj6={
    '.mp3':"Audio File",
    '.mp4':"Video File",
    '.pdf':"pdf File",
    '.jpeg':"Image File",
    '.exe':"Software File",
    '.txt':"Text File"
}
console.log(content)
for(let i=0;i<content.length;i++){
   let con = path.extname(content[i]);
   console.log(obj6[con]);
}
