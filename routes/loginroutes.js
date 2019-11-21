//require  the packages
const express = require('express');
const router = express.Router();
const Register = require('../models/registrationModel');

/* Routes for displaying the registration_form page */
router.get("/", (req, res) => {
    res.render("login");
  });

  module.exports = router;