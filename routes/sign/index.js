var express = require('express');
var router = express.Router();
var commonConfig = require('./../../config/common.config');
var secretConfig = require('./../../config/secret.config');

router.post('/login', function(req, res){
    console.log('router post login');
    var partnerid = req.body.id;
    var partnerpassword = req.body.password;
    // DB에 저장된 비밀번호와 입력된 비밀번호를 비교
    // if(partnerpassword == secretConfig.cryptoDecrypt(저장된 비멀번호, commonConfig.secretKey){
        // 참일 경우
    // }else{
        // 거짓일 경우
    // };
    res.send('login');
});

router.get('/signup', function(req, res){
    console.log('router get signup');
    res.render('sign/signup');
});

router.post('/signup', function(req, res){
    console.log('router post signup');
    var partnerid = req.body.id;
    var partnername = req.body.name;
    var partnerpassword = req.body.password;
    var hashSignupPassword = secretConfig.cryptoEncrypt(partnerpassword, commonConfig.secretKey);
    // 암호화된 비밀번호를 DB에 저장
    // console.log('hashSignupPassword : ' + hashSignupPassword);
    res.send('signup');
});

module.exports = router;