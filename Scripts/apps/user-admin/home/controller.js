/**
 * Created by Eivind on 13.06.2017.
 */
var HomeController = Backbone.Marionette.Controller.extend({
    initialize : function (options) {
        this.module = options.module;
    },
    
    showIndex : function () {
        this.module.app.mainReagion.show(new IndexView());
        this.module.router.navigate("");
    }
});