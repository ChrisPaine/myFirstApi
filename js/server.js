var express = require('express');
var app = express();

// var app = require('express'); optional

app.get('/', function(req, res){ // '/' base url
    // request 'to' the client
    // response 'from' the client
    res.send("My First API!"); // always always send response back json
});

app.get('/funions', function(req, res){ 
    res.send("Yo give me some funions foo!"); 
});

app.listen(3000, function(){
    console.log("First API running on port 3000!");
});