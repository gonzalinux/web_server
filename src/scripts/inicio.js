

let ip=document.getElementById("ip");
let ips=fs.readFileSync("ips").toString().split("\n")
ip.innerText=ips[ips.length-1];