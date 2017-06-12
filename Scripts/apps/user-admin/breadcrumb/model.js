/**
 * Created by Eivind on 12.06.2017.
 */
var BreadCrumb = Backbone.Model.extend({
    select : function () {
        this.trigger("breadcrumb:selected", this);
    }
});
var BreadCrumbCollection = Backbone.Collection.extend({
    model: BreadCrumb
});