var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const { response, request } = require('express');

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

app.get('/ingredients', function(req, res){ // change default route of '//
    // request 'to' the client
    // response 'from' the client
    res.send(ingredients); 
});

app.post('/ingredients', function(req, res){ 
    var ingredient = req.body;
    if(!ingredient || ingredient.text === "") { 
        res.status(500).send({error: "Your ingredient must have text"});
    } else {
        ingredients.push(ingredient); 
        res.status(200).send(ingredients); 
    }
});

//app.get('/todo'); can have as many routes as you want...

app.put('/ingredients/:ingredientId', function(req, res){ // : means param

    var newText = req.body.text;

    if(!newText || newText === ""){
        res.status(500).send({error:"You must provide ingredient text"});
    } else {
        var objectFound = false;
        for(var i = 0; i < ingredients.length; i++){
            var ing = ingredients[i];

            if(ing.id === req.params.ingredientId){
                ingredients[i].text = newText;
                var objectFound = true;
                break;
            }
        }
        if (!objectFound) {
            res.status(500).send({error:"Ingredient id not found"});
        } else{
            res.send(ingredients);
        }
    }
});

app.delete('/ingredients/:ingredientId', function(req, res){
    var id = req.params.ingredientId;

    if(!id || id === ""){
        res.status(500).send({error:"You must provide ingredient id"});
    } else {
        var objectFound = false;
        for(var i = 0; i < ingredients.length; i++){
            var ing = ingredients[i];

            if(ing.id === id){
                //ingredients[i].text = newText;
                delete ingredients[i];
                var objectFound = true;
                break;
            }
        }
        if (!objectFound) {
            res.status(500).send({error:"Ingredient id not found"});
        } else{
            res.send(ingredients);
        }
    }
});

app.listen(3000, function(){
    console.log("First API running on port 3000!");
});