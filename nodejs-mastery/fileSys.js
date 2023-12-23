// Here we will see how to deal with the file module
//*******SYNC********** */
const path = require("node:path")
const {readFileSync, writeFileSync} = require("fs");
const fs = require("node:fs");
// The above two does the same thing only the way is different

// When we read a file in python we pass the filename along with the mode and the type of encoding
const filepath = path.join("../Notes", "demo.txt")
const first = readFileSync(filepath, "utf8");
console.log(first);

// The writesync will create the file if it is not there, But remember this is only going to create file not the folder

// writeFileSync("../Notes/demo1.txt", `This is the content of the demo file from the base folder: ${first}`, {flag:"a"},"utf-8");


// *********ASYNC**********

//=> callback function: When we are done doing something then they will work same like event listener

const {readFile, writeFile} = require("node:fs");

readFile("../Notes/demo.txt","utf8", (err,result)=>{
    if(err){
        console.log(err);
        return
    }
    const first1 = result
    readFile("../Notes/demo1.txt", "utf8", (err, result)=>{
        if(err){
            console.log(err);
            return
        }
        const second = result;
        writeFile("../Notes/demo3.txt", `This is with the async feature: ${first1} - ${second}`,
        (err, result)=>{
            if(err){
                console.log(err);
                return
            }
            console.log(result);
        })
    })
})
