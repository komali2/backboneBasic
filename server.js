"use strict";

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

//create a global database variable
var db;


//API ROUTES

//basic error handle function
function handleError(res, reason, message, code){
    console.log('ERROR: ' + reason);
    res.status(code || 500).json({"error": message});
}

/*
    "/contacts"
    GET: finds all contacts
    POST: creates a new contact
*/

app.get('/contacts', (req, res)=>{
    //add db method get contacts
});

app.post('/contacts', (req, res)=>{
    let newContact = req.body;
    newContact.createDate = new Date();

    if(!(req.body.firstName || req.body.lastName)){
        handleError(res, 'Invalid User Input', 'Must provide a first and last name', 400);
    }

    //add db method create new contact
});

/*
    "/contacts/:id"
    GET: find contact by id
    PUT: update contact by id
    DELETE: deletes contact by id
*/

app.get('/contacts/:id', (req, res)=>{
    // req.params.id
    //add db method to get one contact by id
});

app.put('/contacts/:id', (req, res)=>{
    let updateDoc = req.body;
    delete updateDoc._id;

    // req.params.id

    //add db method to update the given contact
});

app.delete('/contacts/:id', (req, res)=>{
    //add db method to delete given contact
});