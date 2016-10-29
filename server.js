// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Routes
// =============================================================
require('./api-routes.js')(app);
require('./html-routes.js')(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
});

// functions that will be used to populate the tables.html page

// display reservations
function getTables() {

    var myURL = window.location.origin;
    $.ajax({ url: myURL + "/api/tables", method: "GET" })
        .done(function(tables) {
            for (var i = 0; i < tables.length; i++) {

                // display table data here
            }
        });
}

// display waitlist
function getWaitlist() {

    var myURL = window.location.origin;
    $.ajax({ url: myURL + "/api/waitlist", method: "GET" })
        .done(function(waitlist) {

            for (var i = 0; i < waitlist.length; i++) {

                // display waitlist data here

            }
        });
}