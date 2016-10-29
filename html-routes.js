// Basic route that sends the user first to the AJAX Page
var path = require('path');

var tables = [{
    customerName: "Edgar",
    email: "ixmati",
    phone: "956-3350",
    id: 12
}, {
    customerName: "Old hotline",
    email: "Muppet",
    phone: "976-8888",
    id: 13
}];

var htmlRoutes = function(app){
	// Search for Specific Character (or all characters) - provides JSON
	app.get('/api/:tables?', function(req, res) {
	    var tableList = req.params.tables;

	    //This part is to clear a table from occupied
	    if (tableList) {
	        console.log(tableList);
	/*
	        for (var i = 0; i < tables.length; i++) {
	            if (chosen === tables[i].routeName) {
	                res.json(tables[i]);
	                return;
	            }
	        }
	*/
	        res.json(tables);
	    } else {
	        res.json(tables);
	    }
	});

}

module.exports = htmlRoutes;