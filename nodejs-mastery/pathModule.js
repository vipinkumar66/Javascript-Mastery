const  path = require("node:path");

// console.log(path.sep);

const filePath = path.join('/Notes', "demo.txt");
console.log(filePath);

// This will return the filename
const baseFile = path.basename(filePath);
console.log(baseFile);

//This will give us the absolute path
const absPath = path.resolve(__dirname, "Notes", "test.txt");
console.log(absPath);
