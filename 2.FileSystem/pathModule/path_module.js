const path = require('path');

console.log(__dirname); //C:\Users\abhis\OneDrive\Documents\web-dev\learning-nodejs\2.FileSystem\pathModule
console.log(__filename);//C:\Users\abhis\OneDrive\Documents\web-dev\learning-nodejs\2.FileSystem\pathModule\path_module.js

const filePath = path.join("folder","student","file.txt");
console.log(filePath); //folder\student\file.txt in windows but with / in Linux and macos

const parseData = path.parse(filePath);
const resolvePath = path.resolve(filePath);
const extname = path.extname(filePath);
const basename = path.basename(filePath);
const dirname = path.dirname(filePath);

console.log({parseData, resolvePath, extname,basename, dirname});
//  {
//   parseData: {
//     root: '',
//     dir: 'folder\\student',
//     base: 'file.txt',
//     ext: '.txt',
//     name: 'file'
//   },
//   resolvePath: 'C:\\Users\\abhis\\OneDrive\\Documents\\web-dev\\learning-nodejs\\2.FileSystem\\pathModule\\folder\\student\\file.txt',
//   extname: '.txt',
//   basename: 'file.txt',
//   dirname: 'folder\\student'
// }

// 2️⃣ Why it shows as \\ in output
// In JavaScript string literals, the backslash (\) is a special escape character (used for things like \n for newline, \t for tab).

// So, when JavaScript prints a string object representation (like inside console.log({ ... })),
// it escapes the backslash for display purposes:

// swift
// Copy
// Edit
// "folder\\student"
// means
// folder\student when actually used.

// Think of \\ as "one backslash, escaped so it can be stored as a string."