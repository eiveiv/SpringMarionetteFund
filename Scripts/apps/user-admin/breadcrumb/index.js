/**
 * Created by Eivind on 12.06.2017.
 */
var BreadCrumbModule = function (app) {
    var module = {};

    var collection = {};
    module.setCrumbs = function (data) {
        collection.reset(data);
    };

    module.load = function (region, initialData) {
        initialData || (initialData = {});
        collection = new BreadCrumbCollection(initialData);

        collection.on("breadcrumb:selected", function (crumb) {
           app.trigger(crumb.get("trigger"));
        });

        var view = new BreadCrumbList({collection: collection});
        region.show(view);
    };

    // UserAdmin.BreadCrumbs = new BreadCrumbCollection({title: "Home"});
    // UserAdmin.navRegion.show(new BreadCrumbList({collection : UserAdmin.BreadCrumbs}));
    return module;

};