/**
 * Created by Eivind on 13.06.2017.
 */
var UserController = Backbone.Marionette.Controller.extend({
    showUserList: function () {
        var userListView = new UserListView({collection: UserAdmin.Users});
        UserAdmin.mainReagion.show(userListView);
        UserAdmin.UserRouter.navigate("users"); //Denne oppdaterer bare url, ikke noe annet
    },
    showUserDetail: function (user) {
        var user = UserAdmin.Users.get(user.id);
        var layout = new UserLayoutView({model: user});
        UserAdmin.mainReagion.show(layout);

        layout.summary.show(new UserSummaryView({model: user}));
        layout.detail.show(new UserDetailView({model: user}));
        UserAdmin.UserRouter.navigate("user/" + user.id); //Denne oppdaterer bare url, ikke noe annet
    }
});