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
//require('./api-routes.js')(app);
//require('./html-routes.js')(app);

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './index.html'));
});

app.get('/reserve', function(req, res) {
    res.sendFile(path.join(__dirname, './reserve.html'));
});
app.get('/tables', function(req, res) {
    res.sendFile(path.join(__dirname, './tables.html'));
});

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

var waitlist = [];

app.get('/api/:tables?', function(req, res) {
        var tableList = req.params.tables;

        //This part is to clear a table from occupied
        if (tableList === "tables") {
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
        } else if (tableList === "waitlist") {
            res.json(waitlist);
        }
});

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

app.post('/api/new', function(req, res) {
   var reservation = req.body;

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