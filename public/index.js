var joeModel = Backbone.Model.extend({
    url: '/contacts/1',
    defaults: {
        id: null,
        first: null,
        last: null,
        occupation: null
    }
});

var joe = new joeModel();

joe.fetch().then(function(){
    console.log(joe.get('first'));
    console.log(joe.get('last'));
    console.log(joe.set('occupation', 'doing things'));
    console.log(joe.get('occupation'));
    joe.save();
});