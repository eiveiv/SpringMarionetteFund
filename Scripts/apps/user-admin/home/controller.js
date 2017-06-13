/**
 * Created by Eivind on 13.06.2017.
 */
var AppController = Backbone.Marionette.Controller.extend({
    showIndex : function () {
        UserAdmin.mainReagion.show(new IndexView());
        UserAdmin.HomeRouter.navigate("");
    }
});