const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("Public")) // to use static data from pc & plese keep all data in public folder.--"public is folder"

app.get("/", function(req, res){

  res.sendFile(__dirname + "/signup.html");

});

app.post("/" , function(req, res){
  var email = req.body.email;
  var password = req.body.pwd;
console.log(email, password);
if(res.statusCode===200)
res.sendFile(__dirname + "/success.html");
else
res.send(__dirname + "/failure.html");
});

app.post("/failure", function(req, res){
res.redirect("/");
});

app.listen(process.env.PORT || 3000, function(){
    console.log("server is running on port 3000");
    
});