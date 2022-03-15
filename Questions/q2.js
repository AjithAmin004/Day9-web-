// given an array arr=[audio,video,image,software,documents,applications,other]
//make folder for each element in the given array and inside each folder make 4 files of that type

let arr= ["audio","video","image","software","documents","applications","other"];
let fName = ["abc","def","ghi","jkl"]
let ext = ['.mp3','.mp4','.jpeg','.exe','.doc','.apk','.rar']
let fs = require('fs');
let path = require('path');

let organizedPath = path.join(__dirname,"organized"); //creates the path for organizer directory

if(!fs.existsSync(organizedPath)){
    fs.mkdirSync(organizedPath)
} //creates organizer folder in current directory


for(let i=0;i<arr.length;i++){  //for all type of folder
     let nPath = path.join(organizedPath,arr[i]);   //create path for all the folder
    if(!fs.existsSync(nPath)){
        fs.mkdirSync(nPath) //create the folder
    }
    //in each folder
    for(let j=0;j<fName.length;j++){
        let filePath = path.join(nPath,fName[j]+ext[i]); //create 4 new file path with  corresponding extension
        fs.writeFileSync(filePath,""); //for each path create the file

    }


}