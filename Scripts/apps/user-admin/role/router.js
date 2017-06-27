/**
 * Created by Eivind on 13.06.2017.
 */
var RoleRouter = Backbone.Router.extend({

    initialize: function (options) {
        this.module = options.module;
    },

    routes: {
        "roles": "showUserList",
        "role/:id": "showRoleInfo"

    },
    showUserList: function () {
        this.module.app.trigger("role:listing:requested");
    },
    showRoleInfo: function (id) {
        var role = new Role({id : id});
        role.fetch().then(function () {
            role.select();
        })
    }

});