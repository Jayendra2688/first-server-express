const express = require('express');

const app = express();

app.get('/',function(res,req){
    req.send("<h1>Hello</h1>");
})

app.listen(3000,function(){
    console.log("server is listening on port 3000.");
});