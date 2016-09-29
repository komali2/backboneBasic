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
    model: ContactsModel,
    parse: function(data){
        return data.contacts;
    }

});

var contacts = new ContactsCollection();

contacts.fetch().then(function(){

    console.log(contacts.get(1));
    
});

