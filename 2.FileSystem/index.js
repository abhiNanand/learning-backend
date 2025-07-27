import  fs from 'fs';


// //Asynchronous Reading

// fs.readFile('file.txt','utf8',(err,data)=>{
//   if(err)
//     console.log(err);
//   console.log(data);
// });


// //Synchronous reading
// try{
// const data  = fs.readFileSync('file.txt','utf8');
// console.log(data);
// }
// catch(err){
// console.log(err);
// }

// //asynchronous writing files
// fs.writeFile('file.txt','I am from Hajipur',(err)=>{
//    if (err) {
//         console.error(err);
//         return;
//     }
//     console.log('File has been saved!');
// });

// //synchronous writing files
// try{
//   fs.writeFileSync('file.txt',"My name is Abhishek");
// }catch(err){}

// //Asynchronous Appending 
// fs.appendFile('file.txt','\nAppend Content',(err)=>{ //nhi hoga to create kr dega.
// if(err){
//   console.log(err);
// }
// });
// //synchronous Appending
// try{
//   fs.appendFile('file.txt','\nMy name is hero');
// }catch{}

// //Deleting files - asynchronous
// fs.unlink('file.txt',(err)=>{
// if(err){
//   console.log(err);
//   return;
// }
// console.log('file deleted');
// });

// //synchronous deletion
// try{
// fs.unlinkSync('file.txt')
// }
// catch{}


// Working with Directories
// //creatring a directory
// fs.mkdir('newdir/childdir',{recursive:true},(err)=>{
//   if(err){
//     console.log(err);
//     return;
//   }
//   console.log("new directory created");
// });

// //reading a director.

// fs.readdir('a/b',(err,files)=>{
//   if(err){
//     console.err(err);
//     return;
//   }
//   console.log('files in directory:',files);
// });
// isme array ke adher next jo folder hai uska naam rahata hai. 

//Deleting a Directory
//this one is deprecated
// fs.rmdir("newDir",{recursive:true},(err)=>{
//   if(err)
//     return;
//   console.log("directory deleted");
// });

// //new one
// fs.rm("newDir", { recursive: true, force: true }, (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log("Directory deleted");
// });
// //force: true mean if directory is not present then it will now show error.

// //watching changes in directory
// fs.watch('file1.txt', (eventType, filename) => {
//     if (filename) {
//         console.log(`${filename} file Changed!`);
//         console.log(eventType); //change show karega
//     }
// });

// //Copying Files
// fs.copyFile('file1.txt','file2.txt',(err)=>{
//   if(err)
//     return;
//   console.log("copied");
// });
//file2.txt me copy karta hai.

//working with streams

// //reading with streams
// const readStream = fs.createReadStream('file1.txt','utf8');
// readStream.on('data',(chunk)=>{
//   console.log('received chunk',chunk);
// })

// //writing with stream

// const writeStream = fs.createWriteStream('file1.txt');
// writeStream.write('Hello');
// writeStream.write('World');
// writeStream.end(); //Finalizes the stream.
// // Signals that no more data will be written.
// // It also emits a 'finish' event.

// import {readFile,writeFile,appendFile} from 'fs/promises';

// async function readFiles(){
//   try{
//     const data = await readFile("file1.txt",'utf8');
//     console.log(data);
//   }catch(err){
//     console.log(err);
//   }
// }

// readFiles();