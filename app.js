const express =  require("express");
const bodyparser = require("body-parser");
const questions = require(__dirname + "/questions.js");

const app =  express();
app.use(express.static("public"));
app.set("view engine", 'ejs');
app.use(bodyparser.urlencoded({extended:true}));

var i = 0;
var mark = 0;
var lastq = 2;

app.get("/", function(req, res) {
    i = 0;
    mark = 0;
    res.sendFile(__dirname + "/open.html");
});

app.post("/", function(req, res) {
    i = 0;
    mark = 0;
    res.redirect("/quiz");
});

app.get("/quiz", function(req, res) {
    i++;
    if(i!=1)
        res.sendFile(__dirname + "/error.html"); 
    else
        res.render("index", { qdetails : questions(i) });
    
});

app.post("/quiz", function(req, res) {
        
   if(i!=0 && req.body.op === questions(i).answer)
        mark++;
        
    i++;
    
    if (i<6) //51  
    res.render("index", { qdetails : questions(i) });          
    else if (i==6) //51
    res.render("mark", { mark : mark });
    else
    res.sendFile(__dirname + "/error.html"); 
});

app.post("/error", function(req, res) {
    i = 0;
    mark = 0;
    res.redirect("/quiz");
});

app.listen(3000, function() {
    console.log("Server Started");
});