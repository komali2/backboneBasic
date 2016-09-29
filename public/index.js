var ContactsModel = Backbone.Model.extend({
    defaults: {
        id: null,
        first: null,
        last: null,
        occupation: null
    }
});

var ContactsCollection = Backbone.Collection.extend({
    url: '/contacts',
    model: ContactsModel
});

var contacts = new ContactsCollection();

contacts.fetch().then(function(){
    console.log(contacts.length);
});