/* require is a keyword used to use a package and below are the packages */
const express = require("express"); 
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//Midle ware
const app = express();// now we have our express app
app.set("view engine", "pug"); //setting the view engine as pug
app.set("views", path.join(__dirname, "views")); //there's a folder called views and this is how to get it
app.use(bodyParser.urlencoded({ extended: true })); //for geting the posted data from the form in the console/body and the output is json

// var storage = multer.diskStorage({
//   destination:function(req,file,cb){
//     cb(null,"uploads")
//   },
//   filename:function(req,file,cb){
//     cb(null,file.fieldname)
//   }
// })

// import routes
const registrationRoutes = require('./routes/registrationroutes');
app.use('/register',registrationRoutes);
const loginRoutes = require('./routes/loginroutes');
app.use('/login',loginRoutes);


/* mongoose db connection */
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/node-demo");//

// app.get('/', (req,res) => {
//   res.render('register_form')
// });

/* listening for requests: the server */
app.listen(3000, function() {
  console.log("Express listening  on 3000");
});