const fs = require('node:fs');

fs.readFile('note1.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});
