'use strict'

var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {

   req.data.title = 'Request an Architect';
   req.data.page = 'requestArchitect';
   res.render('requestAnArchitect', req.data);
});

module.exports = router;
