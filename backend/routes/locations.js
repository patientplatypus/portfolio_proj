var express = require('express');
var router = express.Router();
var Markers = require('../models/markers');

router.get('/', function(req,res){
  Markers.find({}, function(err, markers){
    if(err){ console.log(err); }
    res.json(markers);
  });
});


module.exports = router;
