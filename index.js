var express = require("express");
var app = express();

app.listen(9595);
 app.set("view engine", "ejs")

app.get("/", function(req, res){
    res.render("index")
});