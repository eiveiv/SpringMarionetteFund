/**
 * Created by Eivind on 13.06.2017.
 */
var UserRouter = Backbone.Router.extend({

    initialize: function (options) {
        this.module = options.module;
    },

    routes: {
        "users": "showUserList",
        "user/:id": "showUserDetail"

    },
    showUserList: function () {
        this.module.app.trigger("user:listing:requested");
    },
    showUserDetail: function (id) {
        var user = new User({id: id});
        user.fetch().then(function () {
            user.select();
        });
    },
});