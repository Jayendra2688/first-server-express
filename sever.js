const express = require('express');

const app = express();

app.get('/',function(req,res){
    res.send("<h1>Hello</h1>");
})
app.get('/about',function(req,res){
    res.send("Hey,I am Jayendra Reddy!!");
})
app.listen(3000,function(){
    console.log("server is listening on port 3000.");
});