//Dependencies
//====================================================
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var routes = require('./controllers/burgers_controller.js');

var app = express();

//Serve static content for the app from the "public" directory in the application directory.
//====================================================
app.use(express.static(__dirname + '/public'));

//Express app data parsing
//====================================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// override with POST having ?_method=DELETE
//====================================================
app.use(methodOverride('_method'))

app.engine('handlebars', exphbs({
    defaultLayout: 'main.handlebars'
}));
app.set('view engine', 'handlebars');

app.use('/', routes);
var PORT = process.env.port || 9000;

app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
});