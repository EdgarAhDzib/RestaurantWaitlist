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
	        res.json(false);
	    } else {
	        res.json(tables);
	    }
	});

	app.post('/api/new', function (req, res) {
		var reservation = req.body;
		reservation.routeName = reservation.name.replace(/\s+/g, '').toLowerCase();

		console.log(reservation);

		addReservation(reservation);

		res.json(reservation);
	});

// adds new reservation to tables if length is < 5, else adds to waitlist
	function addReservation(newReservation) {
	    if (tables.length < 5) {
	        tables.push(newReservation);
	    } else {
	        waitlist.push(newReservation);
	    }
	}
}

module.exports = htmlRoutes;