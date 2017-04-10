var express = require('express');
var app = express();
var commonConfig = require('./config/common.config');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('views','./view');
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

var routerConfig = require('./config/router.config');
routerConfig.routes.forEach(function(val){
    app.use('/'+val, require('./routes/'+val));
});

app.get('*', function(req, res){
    res.redirect('/');
});

app.listen(commonConfig.server.port);
console.log(commonConfig.server.host + ":" + commonConfig.server.port + ", server running : " + Date());
