var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    console.log('router get login');
    res.render('index'); 
});

module.exports = router;