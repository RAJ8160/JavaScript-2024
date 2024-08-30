// 2. Create a webapp with 5 pages like about, contact etc.. using “http” core module in
// NodeJS. (B)

const http=require('http');
const fs=require('fs');
// in this built in module we create own server

const myServer=http.createServer((req,res)=>{
// In req user pass object,in which object user's Ip address, which thing user want from server	
	// console.log(req.headers);
	 // console.log(req);
	const log = `${Date.now()}:${req.url}New Requiest Received\n`
	 fs.appendFile('log.txt',log,(err,data)=>{
	 	switch(req.url){
	 	case "/":res.end("Welcome in Home Page");
	 		break;
	 	case "/about":res.end("Welcome in About Page");
	 	    break;
	 	case "/contact":res.end("Welcome in Contact Page");
	 		break;
	 	case "/select":res.end("Welcome in Select Page");
	 	    break;	
	 	default:res.end("404 Not found");    
	 	}

	 });
	// console.log("New Req Rec.");
	// res.end("Hello Word Server");
});

myServer.listen(8000,()=>{
	console.log("Server Started Sucessfully");
	// All Process like it when my browser requisted to server  server go to uper code and acsicute code
})