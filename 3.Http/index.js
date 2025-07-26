import http from 'http';

// http.createServer((request,response)=>{
//   response.write("server running!");
//   response.end();
// }).listen(3000);

// console.log("server started on port 3000");

 
// const server = http.createServer((req, res) => {
//   res.writeHead(300, { 'Content-Type': 'text/plain' });
//   res.end('Hello from Node.js HTTP server using ESM (.mjs)!');
// });

// server.listen(3000, () => {
//   console.log('Server is running at http://localhost:3000');
// });

//Accessing the Request URL
// const server = http.createServer((req, res) => {
//   // Get the URL and HTTP method
//   const { url, method } = req;
 
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end(`You made a ${method} request to ${url}`);
// });

// server.listen(3000, () => {
//   console.log('Server running at http://localhost:3000/');
// });

// //Splitting the Query String
// import url from 'url';
// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     var q = url.parse(req.url, true).query; // Parse the query string
//     var txt = q.year + " " + q.month; // Get year and month from query string
//     res.end(txt); // Display the result
// }).listen(3000, () => {
//     console.log('Server running at http://localhost:3000/');
// });
// // query: {
// //     year: '2024',
// //     month: 'July'
// //   }

//Handling Different HTTP Methods
const server = http.createServer((req,res)=>{
  if(req.method === 'GET'){
    res.end('GET request received');
    } else if (req.method === 'POST') {
    res.end('POST request received');
  } else if (req.method === 'PUT') {
    res.end('PUT request received');
  } else if (req.method === 'DELETE') {
    res.end('DELETE request received');
  } else {
    res.statusCode = 405;
    res.end('Method Not Allowed');
  }
  
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

//manually routes ko check karne hai http.
//  if (req.url === '/' && req.method === 'GET') {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Welcome to Home Page');
//   } else if (req.url === '/about' && req.method === 'GET') {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('About Page');
//   } else if (req.url === '/contact' && req.method === 'POST') {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Contact form submitted');