/**
 * Created by Eivind on 13.06.2017.
 */
var HomeRouter = Backbone.Router.extend({
    routes: {
        "" : "showIndex"

    },
    showIndex: function () {
        UserAdmin.trigger("index:requested");
    },

});