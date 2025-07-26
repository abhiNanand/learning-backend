import https from 'https';
import fs from 'fs';

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem') //  
};

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end("Hello secure world"); //  
}).listen(3000, () => {
  console.log("Server running on https://localhost:3000"); //  
});
