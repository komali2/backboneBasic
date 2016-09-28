var api = {};
var storage = {};
var id = 0;

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
//TODO api.deleteContact



module.exports = api;