var UserLayoutView = Backbone.Marionette.LayoutView.extend({
    template : "#user-layout-template",
    regions : {
        summary: "#summary",
        detail: "#detail"
    }
});
var UserSummaryView = Backbone.Marionette.ItemView.extend({
    template : "#summary-template"
});
var UserDetailView = Backbone.Marionette.ItemView.extend({
    template : "#detail-template"
});
var UserItemView = Backbone.Marionette.ItemView.extend({
    tagName: "tr",
    template: _.template("<td><a href='#'><%=email%></a></td>"),
    events: {
        "click a" : "showUserDetail"
    },
    showUserDetail: function (ev) {
        ev.preventDefault();
        console.log('typeUser ::' + typeof this.model);
        this.model.select();
    }
});
var UserListView = Backbone.Marionette.CollectionView.extend({
    tagName: "table",
    className: "table table-striped",
    childView: UserItemView,
    onBeforeRender: function () {
        this.$el.append("<h2> User List </h2>");
    }
});