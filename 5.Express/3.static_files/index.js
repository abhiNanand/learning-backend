import express from 'express';

const app = express();


app.listen(3000);

//2nd way but yha pr routes use karna para hai.

// app.get('/api/image/:name', (req, res) => {
//   const name = req.params.name;
//   res.send(`http://localhost:3000/image/${name}`);
// });
