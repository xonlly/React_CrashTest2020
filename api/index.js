const express = require('express')
const app = express()
const port = 8000

let count = 0; 

app.get('/', (req, res) => {
    res.send(`${count}`);
})

app.listen(port, (err) => {
  if (err) {
    throw new Error('Bad things happen when you act like squirrel !');
  }

  console.log(`NO Way ! It work's on http://127.0.0.1:${port} !! Brain's back !!!`);

  setInterval(() => {
    console.log('Upgrade count number');
    
    count++
  }, 1000)
});


