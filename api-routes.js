// Basic route that sends the user first to the AJAX Page
var path = require('path');

var apiRoutes = function(app){
	app.get('/', function(req, res) {
	    res.sendFile(path.join(__dirname, './index.html'));
	});

	app.get('/reserve', function(req, res) {
	    res.sendFile(path.join(__dirname, './reserve.html'));
	});

	app.get('/tables', function(req, res) {
	    res.sendFile(path.join(__dirname, './tables.html'));
	});
}

module.exports = apiRoutes;