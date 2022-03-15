//copy index.html file from module1 to a new folder inside module2 having name html.

let fs = require('fs');
let path = require('path');

let nPath = path.join(__dirname,"..","..","HTML");

if(!fs.existsSync(nPath)){
     fs.mkdirSync(nPath);
}


let sPath  = path.join(__dirname,"..","..","..","Module1","index.html");
let dPath  = path.join(__dirname,"..","..","html","index.html")

fs.copyFileSync(sPath,dPath);