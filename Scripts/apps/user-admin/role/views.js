var RoleLayoutView = Backbone.Marionette.LayoutView.extend({
    template : "#role-layout-template",
    regions : {
        summary: "#role-summary",
        detail: "#role-detail"
    }
});
var RoleSummaryView = Backbone.Marionette.ItemView.extend({
    template : "#role-summary-template"
});
var RoleDetailView = Backbone.Marionette.ItemView.extend({
    template : "#role-detail-template"
});


var RoleItemView = Backbone.Marionette.ItemView.extend({
    tagName: "tr",
    template: _.template("<td><a href='#'><%=roleName%></a></td>"),
    events: {
        "click a" : "showRoleInfo"
    },
    showRoleInfo: function (ev) {
        ev.preventDefault();
        console.log('typeUser ::' + typeof this.model);
        this.model.select();
    }

});
var RoleListView = Backbone.Marionette.CollectionView.extend({
    tagName: "table",
    className: "table table-striped",
    childView: RoleItemView,
    onBeforeRender: function () {
        this.$el.append("<h2> Role List </h2>");
    }
});