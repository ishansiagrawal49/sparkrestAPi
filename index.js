var express = require("express");
var app     = express();
var bodyParser = require("body-parser");
var mongoose= require("mongoose");
var User = require("./models/user");
var faker = require("faker");

app.set("view engine","ejs");
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.urlencoded({extended:true}));
mongoose.connect("mongodb://localhost/sparks");

var page = 0;
var edit = {};
var info = {};


///////////////
// Routes ////
/////////////

app.get("/",function(req,res){
  User.find({},function(err,users){
    if(err){
      console.log(err);
      res.redirect("/");
    }
    else{
      res.render("home",{users:users , edit:edit , info:info , page:page} );
      page = 0;
    }
  });
});


app.get("/info/:id", function(req,res){
  User.findById(req.params.id,function(err,result){
    if(err){
      console.log(err);
      res.redirect("/");
    }
    else{
      info = result;
      page = 1;
      res.redirect("/");
    }
  });
});


app.get("/edit/:id", function(req,res){
  User.findById(req.params.id,function(err,result){
    if(err){
      console.log(err);
      res.redirect("/");
    }
    else{
      edit = result;
      page = 2;
      res.redirect("/");
    }
  });
});

app.post("/new",function(req,res){
  var b = req.body.a;
  User.create(b , function(err,user){
    if(err){
      console.log(err);
    }
    res.redirect("/");
  })
})

app.put("/update/:id",function(req,res){
    var b = req.body.a;
    b.updated = new Date();
    User.findByIdAndUpdate(req.params.id,b,function(err,updated){
       if(err){
           console.log(err);
           res.redirect("/");
       }
       else{
           console.log(updated);
           res.redirect("/");
       }
   }) ;
});


app.delete("/delete/:id",function(req,res){
    User.findByIdAndRemove(req.params.id,function(err){
      if(err){
          res.redirect("back");
      }
      else{
          res.redirect("/");
      }
   });
});


// Server
app.listen(8000,function(req,res){
   console.log("Server running on port 8000 ....");
});
