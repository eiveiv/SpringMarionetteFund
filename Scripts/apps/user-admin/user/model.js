var User = Backbone.Model.extend({
    urlRoot: "http://localhost:8080/user?id=",
    validate: function (atts, opts)  {
        if (!(atts.email && atts.name)) {
            return "Trenger epost og navn"
        }
    },
    initialize: function () {
        this.on("invalid", function (m) {
            alert(m.validationError);
        });
    },
    select: function () {
        console.log('select function')
        UserAdmin.trigger("user:selected", this);
    }
});
var UsersCollection = Backbone.Collection.extend({
    url : "http://localhost:8080/users",
    model : User
});