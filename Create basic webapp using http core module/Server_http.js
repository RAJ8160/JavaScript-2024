// 3. Create a webapp in NodeJS which reads ƒles like about.txt, contact.txt and display it
// using http core module (C)

const http=require('http');
const fs=require('fs');
// in this built in module we create own server

const myServer=http.createServer((req,res)=>{
// In req user pass object,in which object user's Ip address, which thing user want from server	
	// console.log(req.headers);
	 // console.log(req);
	 
	 	switch(req.url){
	 	case "/":fs.readFile('./home.txt',"utf-8",(err,data)=>{
				 	   res.end(data);
				 	})
				  break;	 
	 	case "/about":fs.readFile('./about.txt',"utf-8",(err,data)=>{
				 	 res.end(data);	
				 	})
				 	break;
	 	case "/contact":fs.readFile('./contact.txt',"utf-8",(err,data)=>{
				 	  res.end(data);	
				 	})
				  break;	 
	 	case "/select":fs.readFile('./select.txt',"utf-8",(err,data)=>{
				 	  res.end(data);	
				 	}) 
				  break;	 
	 	default: res.end("404 Not found");    
	 	}

	// console.log("New Req Rec.");
	// res.end("Hello Word Server");
});

myServer.listen(8001,()=>{
	console.log("Server Started Sucessfully");
	// All Process like it when my browser requisted to server  server go to uper code and acsicute code
})