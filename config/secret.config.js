var crypto = require("crypto");

exports.cryptoEncrypt = function(data, key){
    var cipher = crypto.createCipher('aes-256-cbc', key);
    var encipheredContent = cipher.update(data,'utf8','hex');
    encipheredContent += cipher.final('hex');
    return encipheredContent;
};

exports.cryptoDecrypt = function decrypt(data, key){
    var decipher = crypto.createDecipher('aes-256-cbc', key);
    var decipheredPlaintext = decipher.update(data,'hex','utf8');
    decipheredPlaintext += decipher.final('utf8');
    return decipheredPlaintext;
};