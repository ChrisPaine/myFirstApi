var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const { response } = require('express');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var ingredients = [
    {
        "id":"232kAk",
        "text":"Eggs"
    },
    {
        "id":"dkP345",
        "text":"Milk"
    },
    {
        "id":"dkcuu7",
        "text":"Bacon"
    },
    {
        "id":"73hdy",
        "text":"Frog Legs"
    }
];

app.get('/', function(req, res){ // '/' base url
    // request 'to' the client
    // response 'from' the client
    res.send(ingredients); // always always send response back json
});

app.post('/', function(req, res){
    var ingredient = req.body;
    if(!ingredient || ingredient.text === "") { // check for null
        res.status(500).send({error: "Your ingredient must have text"});
    } else {
        ingredients.push(ingredient); // if not null add
        res.status(200).send(ingredients); // send back entire array
    }
});


app.listen(3000, function(){
    console.log("First API running on port 3000!");
});