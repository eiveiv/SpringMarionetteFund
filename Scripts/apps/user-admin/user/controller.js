/**
 * Created by Eivind on 13.06.2017.
 */
var UserController = Backbone.Marionette.Controller.extend({

    initialize : function (options) {
      this.module = options.module;
    },

    showUserList: function () {
        var userListView = new UserListView({collection: this.module.collection});
        this.module.app.mainReagion.show(userListView);
        this.module.router.navigate("users"); //Denne oppdaterer bare url, ikke noe annet
    },
    showUserDetail: function (user) {
        var layout = new UserLayoutView({model: user});
        this.module.app.mainReagion.show(layout);

        layout.summary.show(new UserSummaryView({model: user}));
        layout.detail.show(new UserDetailView({model: user}));
        this.module.router.navigate("user/" + user.id); //Denne oppdaterer bare url, ikke noe annet
    }
});