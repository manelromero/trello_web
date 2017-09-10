Class('Page.Home', {

    initialize: function() {
        new Services.Trello();
        new Services.Vue();

        this.listId = '59b3d25c2d8d43ecf8c7a33a';
        this.publish();
    },

    publish: function() {
        Bus.publish('blog.retrieve', this.listId);
    }

});
