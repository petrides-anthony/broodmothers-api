const express = require('express')
const app = express()
const port = 3000

let reqCount = 0;

// use(req counter)
app.use((req, res, next) => {
  reqCount++;
  console.log(reqCount);
  next()
})

// Respond with string
app.get('/my-url', (req, res) => res.send('Hello World!'))

// Response with json
app.get("/my-url/json", (req, res) => {
  res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});

app.listen(port, () => console.log(`Server running and listening on port ${port}!`));


/*
--> request   --> express listen handler runs
                --> run use(req counter)
                --> check and run get('/my-url')
                --> check and run get('/my-url/json')
              
              <-- reply back
*/

// Task: Create folder with all the json structure that i want the API to reply with.