const http=require("http");
const fs=require("fs")
//const host="132.145.20.242";
const host="localhost";
const port=80;



    const requestListener=function(req,res){

        let contents=fs.readFileSync("index.html" )
            console.log("adada");
            res.setHeader("Content_Type","text/html");
            res.writeHead(200);
            res.end(contents);


    }
const server =http.createServer(requestListener);
server.listen(port,host,()=>{
    console.log("Server is running")
})