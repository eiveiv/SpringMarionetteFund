/**
 * Created by Eivind on 13.06.2017.
 */
var IndexView = Backbone.Marionette.ItemView.extend({
    template : "#index-template",
    events: {
        "click #nav-roles-index" : "showRolesList",
        "click #nav-users-index" : "showUserList"

    },
    showUserList: function (ev) {
        ev.preventDefault();
        UserAdmin.trigger("user:listing:requested");
    },
    showRolesList: function (ev) {
        console.log("kom inn her");
        ev.preventDefault();
        UserAdmin.trigger("role:listing:requested");
    }
});
