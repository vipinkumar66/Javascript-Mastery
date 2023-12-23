const http = require("node:http");

const server = http.createServer((req, res)=>{
    if (req.url === "/"){
        res.end("WELCOME TO THE FIRST NODE JS SERVER APP");
    }
    if (req.url === "/about"){
        res.end("This is our about page")
    }
    res.end(`<h1>OOPS<h1/> <p>We did not find the page your are searching for<p/>
            <a href="/">Go back to home page<a/>`)
})
server.listen(5000)