const http = require('http');
const fs = require('fs');
const mime = require('mime-types');


let lookup = mime.lookup;
 
const port = 3000;




// when we create a server instance, it is IMMUTABLE = cannot be changed until the server is restarted






const server = http.createServer(function(req, res)
{
    let path = req.url;

    if(path =="/" || path =="/home")
    {
        path = "/index.html";
    }

    let mime_type= lookup(path.substring(1));
    console.log(`Mime Type: ${mime_type}`);

    fs.readFile(__dirname + path, function(err, data)
    {
         if(err)
         {
            res.writeHead(404); // status - file not found
            return res.end("ERROR: 404 - File Not Found"); // output the error message to the page
        }
        res.setHeader("X-Content-Type-Options", "nosniff"); // security guard
        res.writeHead(200, {'Content-Type': mime_type});
        return res.end(data);
    });
});


server.listen(port, function()
{
    console.log(`Server running at port: ${port}`)
});







