/**
 * Created by Eivind on 13.06.2017.
 */
var RoleController = Backbone.Marionette.Controller.extend({

    initialize : function (options) {
        this.module = options.module;
    },

    showRolesList: function () {
        console.log("kom in i showRolesList")
        var roleListView = new RoleListView({collection: this.module.rolecollection});
        this.module.app.mainReagion.show(roleListView);
        this.module.router.navigate("roles"); //Denne oppdaterer bare url, ikke noe annet
        this.module.rolecollection.fetch();
    },
    showRoleInfo: function (role) {
        console.log("kom in i showRoleInfo");
        var layout = new RoleLayoutView({model : role});
        this.module.app.mainReagion.show(layout);
        layout.summary.show(new RoleSummaryView({model : role}));
        layout.detail.show(new RoleDetailView({model : role}));
        this.module.router("role/" + role.id);
    }
});