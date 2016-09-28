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
    joe.get('first');
    joe.get('last');
    joe.set('occupation', 'doing things');
    joe.save();
});