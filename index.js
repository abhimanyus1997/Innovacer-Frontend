var express=require('express');
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views',__dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.get('/',function(req,res){
	res.render('index.html');
});

var path=require('path');
app.use(express.static(path.join(__dirname, 'public')));

var port = process.env.PORT || 8000
app.listen(port, function() {
    console.log(" http://localhost:" + port);
});
