const express = require('express')
const app = express()
const port = 3000

// Respond with string
app.get('/my-url', (req, res) => res.send('Hello World!'))

// Response with json
app.get("/my-url/json", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
   });

app.listen(port, () => console.log(`Server running and listening on port ${port}!`));