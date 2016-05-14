//Database Connection
//============================================================
var mysql = require('mysql');
var connection;
// var connection = mysql.createConnection({
// 	host	: 'localhost',
// 	user	: 'root',
// 	password: '',
// 	database: 'burgers_db'
// });

// connection.connect(function(err) {
// 	if (err) throw err;
// 	console.log('connected as id ' + connection.threadId);
// });

//Sequelize Database setup
//============================================================

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		host	: 'localhost',
		user	: 'root',
		password: '',
		database: 'burgers_db'
	});
}

//Create the model and define the schema using Sequelize
connection.connect(function(err) {
	if (err) throw err;
	console.log('connected as id ' + connection.threadId);
});

module.exports = connection;