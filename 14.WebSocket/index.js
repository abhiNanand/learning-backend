
import express from 'express';
import { createServer } from 'http';
import {Server} from 'socket.io';
import path from 'path';


const app = express();
const server = createServer(app);

 app.use(express.static(path.resolve("public")));
 const io = new Server(server);

 io.on("connection",(socket)=>{
  console.log("A user had connected", socket.id);

  socket.on("disconnect",()=>{
    console.log('user disconnected');
  });

  socket.on('chat message',(msg)=>{
    console.log('message'+msg);
    io.emit('chat message',"i got your message");
  });
 });

app.get('/', (req, res) => {
  res.send('hello');
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});