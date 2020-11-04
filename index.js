const http=require("http");
const fs=require("fs")
//const host="132.145.20.242";
//const host="localhost";
const port=80;
let contents=fs.readFileSync("index.html" )
let archivo=fs.readFileSync("ips.txt")
archivo=archivo.toString().split("\n");
console.log(archivo)


    const requestListener=function(req,res){

        let ip=req.connection.remoteAddress;
        for(let i=0;i<archivo.length;i++)
            if(archivo[i]!=ip) {
            console.log("ada")
                archivo.push(ip+"\n")
                fs.writeFileSync("ips.txt", archivo)
            }
            res.setHeader("Content_Type","text/html");
            res.writeHead(200);
            res.end(contents);


    }
const server =http.createServer(requestListener);
server.listen(port,()=>{
    console.log("Server is running")

})