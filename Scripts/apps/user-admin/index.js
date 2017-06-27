/**
 * Created by Eivind on 14.06.2017.
 */
//App objects
var UserAdmin = new Backbone.Marionette.Application();
UserAdmin.addRegions({
    mainReagion: "#app",  //Jquery selecter for å hente app div
    navRegion: "#breadcrumbs"
});

//Module loader
UserAdmin.addInitializer(function () {
    UserAdmin.breadCrumbs = new BreadCrumbModule({
        app: UserAdmin,
        region: UserAdmin.navRegion,
        initialData: {title: "Home"}
    });
    UserAdmin.user = new UserModule({app: UserAdmin});
    UserAdmin.home = new HomeModule({app: UserAdmin});
});

//Breadcrumb events
UserAdmin.addInitializer(function () {

    var crumbs = {
        home: {title: "Home", trigger: "index:requested"},
        list: {title: "User Listing", trigger: "user:listing:requested"}
    }

    UserAdmin.breadCrumbs.show();
    UserAdmin.on("user:selected", function (selectedUser) {
        UserAdmin.breadCrumbs.setCrumbs([crumbs.home, crumbs.list, {title: selectedUser.get("email")}]);
    });

    UserAdmin.on("user:listing:requested", function () {
        UserAdmin.breadCrumbs.setCrumbs([crumbs.home, crumbs.list]);
    });

    UserAdmin.on("index:requested", function () {
        UserAdmin.breadCrumbs.setCrumbs(crumbs.home);
    });


});

//User Events
UserAdmin.addInitializer(function () {


    UserAdmin.on("user:selected", function (selectedUser) {
        console.log('selected user' + selectedUser);
        UserAdmin.user.controller.showUserDetail(selectedUser);
    });

    UserAdmin.on("user:listing:requested", function () {
        UserAdmin.user.controller.showUserList();
    });


    UserAdmin.on("role:selected", function (selectedUser) {
        console.log('selected user' + selectedUser);
        UserAdmin.user.rolecontroller.showRoleInfo(selectedUser);
    });

    UserAdmin.on("role:listing:requested", function () {
        console.log("kom inn i on")
        UserAdmin.user.rolecontroller.showRolesList();
    });

});

//Home Events
UserAdmin.addInitializer(function () {

    UserAdmin.on("index:requested", function () {
        UserAdmin.home.controller.showIndex();
    });

    Backbone.history.start();

});