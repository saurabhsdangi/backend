const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000

app.use(bodyParser.json());

app.post('/backend-api/conversation', function(req,  res){
    const message = req.body.message;
    console.log(message);
    
    res.json({
        output: "2 + 2 = 4"
})
})

// app.post('/conversations', (req,  res) => {
//     console.log(req.body)
//     res.send({
//         msg: "2 + 2 = 4"
//     }) 
// })

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`);
})