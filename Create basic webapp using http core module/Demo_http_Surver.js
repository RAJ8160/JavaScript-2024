const http=require('http');
const fs=require('fs');
// in this built in module we create own server

const myServer=http.createServer((req,res)=>{
// In req user pass object,in which object user's Ip address, which thing user want from server	
	// console.log(req.headers);
	 // console.log(req);
	const log = `${Date.now()}:${req.url}New Requiest Received\n`
	 fs.appendFile('log.txt',log,(err,data)=>{
	 	res.end("Hello Word Server");
	 });
	// console.log("New Req Rec.");
	// res.end("Hello Word Server");
});

myServer.listen(8000,()=>{
	console.log("Server Started Sucessfully");
	// All Process like it when my browser requisted to server  server go to uper code and acsicute code
})