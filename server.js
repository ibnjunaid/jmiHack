const http = require('http');
const fs = require('fs');
const server = http.createServer((request,response) => {
	response.writeHead(200,'{content-type:text/html}');
	
	fs.readFile('./index.html',(error,data)=>{
		if (error){
				console.log(error.message);
		}
		//console.log(data.toString());
		response.write(data.toString());
		response.end();
	});
});

server.listen(4000,'127.0.0.1',()=>{
	console.log("server Running @ http://127.0.0.1:4000");
});
