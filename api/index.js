const express = require('express')
const app = express()
const port = 8000

count=0; 

app.get('/', (req, res) => {
    res.send(`${count}`);
})

app.listen(port, (err) => {
    if (err) {
      throw new Error('Bad things happen when you act like squirrel !');
    }
  
    console.log(`NO Way ! It work's on http://127.0.0.1:${port} !! Brain's back !!!`);
  });
  