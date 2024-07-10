const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname:String,
    lastname:String
});

const User = mongoose.model("details", userSchema);

module.exports = User;
