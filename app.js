const express = require("express");
const request = require("request");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

app.get("/", function(req,res){
    res.sendFile(__dirname+"/signup.html");
});

app.post("/", function(req,res){
    
    var firstName = req.body.fName;
    var lastNAme = req.body.lName;
    var email = req.body.email;
})

app.listen(process.env.PORT||3000, function(){
    console.log("Server started at port 3000");
});

// var apiKey = "7086d00b856a9d5b3c9f11af5f3c4eb0-us5"