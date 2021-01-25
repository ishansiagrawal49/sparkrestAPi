var mongoose = require("mongoose");

// User Model for Mongoose (Mongo DB database)
var userSchema = new mongoose.Schema({
  name:String,
  email:String,
  institute:String,
  branch:String,
  role:String,
  image:{type:String , default: "https://www.w3schools.com/howto/img_avatar.png"},
  contact:String,
  created:{type: Date, default: Date.now},
  updated:{type: Date, default: Date.now},
});

module.exports=mongoose.model("User",userSchema);
