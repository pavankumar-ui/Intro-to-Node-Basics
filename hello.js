var http = require('http');    //builtin api modules
var fs = require('fs');
var url = require('url');


//builtin syntax for node js//
http.createServer((req,res) =>{

   var q = url.parse(req.url , true);
   
	var filename = "." + q.pathname;  //after . filename occurs//

	if(filename == './') { filename = './index'}

		filename = filename + ".html";
	console.log(filename);

 fs.readFile(filename,(err,data) =>{


 	if(err){
	res.writeHead(404,{'Content-Type': 'text/html'});
	return res.end('404 Not Found');
}


 res.writeHead(200, {'Content-Type': 'text/html'});

 res.write(data);
 return res.end();
})
}).listen(8081);

console.log("server listening on port 8081........");
