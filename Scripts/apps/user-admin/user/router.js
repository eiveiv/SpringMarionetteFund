/**
 * Created by Eivind on 13.06.2017.
 */
var UserRouter = Backbone.Router.extend({
    routes: {
        "users" : "showUserList",
        "user/:id" : "showUserDetail"

    },
    showUserList: function () {
        UserAdmin.trigger("user:listing:requested");
    },
    showUserDetail: function (id) {
        var user = UserAdmin.Users.get(id);
        user.select();
    },
});