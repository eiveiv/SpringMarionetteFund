var Role = Backbone.Model.extend({

});
var RolesCollection = Backbone.Collection.extend({
    url : "http://localhost:8080/roles",
    model : Role
});