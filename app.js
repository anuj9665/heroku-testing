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

