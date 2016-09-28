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
var db = require('./db.js');


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
    db.getContacts().then((contacts)=>{
        res.send(contacts);
    })
    .catch((err)=>{
        handleError(res, 'couldnt get contacts', 'couldnt get contacts');
    });
});

app.post('/contacts', (req, res)=>{
    let newContact = req.body;
    newContact.createDate = new Date();

    if(!(req.body.first || req.body.last)){
        handleError(res, 'Invalid User Input', 'Must provide a first and last name', 400);
    }

    db.createContact(newContact).then((contact)=>{
        res.send(contact);
    })
    .catch((err)=>{
        handleError(res, 'couldnt create contact', 'couldnt create contact');
    });

});

/*
    "/contacts/:id"
    GET: find contact by id
    PUT: update contact by id
    DELETE: deletes contact by id
*/

app.get('/contacts/:id', (req, res)=>{
    // req.params.id
    db.getContact(req.params.id).then((contact)=>{
        res.send(contact);
    })
    .catch((err)=>{
        handleError(res, 'could not get contact' + req.params.id, 'could not get contact' + req.params.id);
    });
});


app.put('/contacts/:id', (req, res)=>{
    // req.params.id
    db.updateContact(req.params.id).then((contact)=>{
        res.send(contact);
    })
    .catch((err)=>{
        handleError(res, 'could not update contact' + req.params.id, 'could not update contact' + req.params.id);
    });
});

app.delete('/contacts/:id', (req, res)=>{
    //add db method to delete given contact
    db.deleteContact(req.params.id).then(()=>{
        res.send('contact deleted');
    })
    .catch((err)=>{
        handleError(res, 'could not delete contact' + req.params.id, 'could not delete contact' + req.params.id);
    });
});