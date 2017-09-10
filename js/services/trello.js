Class('Services.Trello', {

    Extends: Service,

    initialize: function() {
        Services.Trello.Super.call(this, 'https://api.trello.com/1/');
    },

    retrieveCards: function(listId) {
        var endpoint = 'lists/' + listId + '/cards?attachments=cover';

        this.doRequest(endpoint, '', function(cards) {
            Bus.publish('blog.retrieved', cards);
        }.bind(this));
    },

    subscribe: function() {
        Bus.subscribe('blog.retrieve', this.retrieveCards.bind(this));
    }

});
