var api = {};
var storage = {};
var id = 2;

storage[1] = {
    id: 1,
    first: 'joe',
    last: 'smith',
    occupation: 'not doing things'
}

api.getContacts = function(){
    return new Promise((resolve, reject)=>{
        var contacts = storage.keys();
        if(!contacts.length){
            reject();
        }
        else{
            resolve(contacts);
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