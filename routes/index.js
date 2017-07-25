var express = require('express');
var router = express.Router();
var {msg} = require('./../public/javascripts/secrete');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(msg);
});

module.exports = router;
