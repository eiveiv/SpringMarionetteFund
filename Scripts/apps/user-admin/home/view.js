/**
 * Created by Eivind on 13.06.2017.
 */
var IndexView = Backbone.Marionette.ItemView.extend({
    template : "#index-template",
    events: {
        "click #nav-users-index" : "showUserList"
    },
    showUserList: function (ev) {
        ev.preventDefault();
        UserAdmin.trigger("user:listing:requested");
    }
});
