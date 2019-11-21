//require  the packages
const express = require('express');
const router = express.Router();
const Register = require('../models/registrationModel');

/* Routes for displaying the registration_form page */
router.get("/", (req, res) => {
    res.render("register_form");
  });
  
  //routes for displaying information from registration_form
  router.post("/", (req, res) => {
    const myData = new Register(req.body); 
    myData.save() 
      .then(item => { 
        Register.find().then( //query the collection
          items=>{
                   res.render("list", { 'users': items }); 
                 })
      })
      .catch(err => { //.catch promise and used because nodejs asyncronously waits
        res.status(500).send("unable to save to database");
      });
  });

module.exports = router;