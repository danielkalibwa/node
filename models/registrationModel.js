
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")


/* Creating a Database Schema....schema should be the same format as req.body */
// aslo schema gives a look to our data....i mean how data are going to look like
const registerSchema = new mongoose.Schema({
    firstname: {
      type: String,
      required: 'Please Enter first name'},
    lastname: String,
    Username: {
      type: String,
      required: 'Please Enter Username'},
    Email:String,
    password: {
      type: String,
      required: 'Please Enter Password name'},
    gender: String,
    country: String,
    city: String
  });

  registerSchema.add({Username:{type: String, unique: true, required:'Please enter your username'}})

  //hashing a password before saving it the database pre-save hook
  registerSchema.pre('save',function(next){
    this.password = bcrypt.hashSync(this.password, 10);
    next()
  })
  
  /* creates documents in the db------------------------------------- name of the collection model(collection storage,schemaStructure)....takes on the structure of schema and the req.body(user data) into the Register collection */
  module.exports = mongoose.model("Register", registerSchema);
  