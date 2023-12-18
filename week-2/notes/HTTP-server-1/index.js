const express = require('express')
const app = express()
const port = 3000

app.get('/', function(req, res) {
  res.send('Hello World!')
})

app.post('/conversations', function(req, res){
    
    res.send({
        msg: "hi there"
    })
})

app.listen(port)