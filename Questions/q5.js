//move a file

let fs  = require('fs');
let path = require('path');

let sPath = path.join(__dirname,"..","unorganize","abc.txt");
let dPath = path.join(__dirname,"abc.txt");

fs.copyFileSync(sPath,dPath);

fs.unlinkSync(sPath);