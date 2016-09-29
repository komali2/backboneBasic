var api = {};
var storage = {};

var id = 3;

storage[1] = {
    id: 1,
    first: 'joe',
    last: 'smith',
    occupation: 'not doing things'
}
storage[2] = {
    id: 2,
    first: 'jill',
    last: 'stein',
    occupation: 'running for prez'
}
api.getContacts = function(){
    return new Promise((resolve, reject)=>{
        var contacts = Object.keys(storage);
        if(!contacts.length){
            reject();
        }
        else{
            var out = contacts.map((el)=>{
                return storage[el];
            });
            var give = {
                thing: 'hello',
                contacts: out
            }
            resolve(JSON.stringify(give));
        }
    });
}

api.createContact = function(newContact){
    //TODO: somehow make sure it isnt a duplicate
    storage[id] = newContact;
    id++;

    return new Promise((resolve, reject)=>{
        resolve(newContact);
    });
}

api.getContact = function(id){
    console.log('got request for ', id);
    return new Promise((resolve, reject)=>{
        if(!storage[id]){
            reject();
        } else{
            resolve(storage[id]);
        }
    });
}

//TODO: api.updateContact

api.updateContact = function(id, updates){
    return new Promise((resolve, reject) => {
        if (!storage[id]) {
            reject();
        } else {
            storage[id] = updates;
            resolve(storage[id]);
        }
    });
    
}
//TODO api.deleteContact



module.exports = api;