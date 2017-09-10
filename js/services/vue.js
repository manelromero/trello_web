Class('Services.Vue', {

    Extends: Service,

    initialize: function() {
        Services.Vue.Super.call(this, '');
    },

    renderBlog: function(cards) {
        new Vue({
            el: '#blog',
            data: {cards: cards}
        });
    },

    subscribe: function() {
        Bus.subscribe('blog.retrieved', this.renderBlog.bind(this));
    }

});
