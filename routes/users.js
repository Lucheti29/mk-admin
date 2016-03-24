var express = require('express');
var router = express.Router();

var groups = require('../models/groups');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');

  groups.get(1, function(err, group) {
    if (err) throw err;
    console.log('The group name is ' + group.name);
  });

});

module.exports = router;
