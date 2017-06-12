/**
 * Created by Eivind on 12.06.2017.
 */
var BreadCrumbView = Backbone.Marionette.ItemView.extend({
    tagName: "li",
    template: _.template("<a href=#><%=title%></a>"),
    events: {
        "click a" : "fireTrigger"
    },
    fireTrigger: function (ev) {
        ev.preventDefault();
        console.log(this.model);
        console.log('test ' +  typeof this.model );  //Er ikke instance of breadcrumb
        this.model.select();

    }
});

var BreadCrumbList = Backbone.Marionette.CollectionView.extend({
    tagName: "ol",
    className : "breadcrumb",
    childView : BreadCrumbView
});