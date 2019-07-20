'use strict';

var express = require('express');
var router = express.Router();
var wordHandler = require("../api/controller/wordController.js");

//Routes
router.post('/add_words',wordHandler.add); //Add
router.get('/get_words',wordHandler.getWords); //Get words

module.exports = router;
