var User = Backbone.Model.extend({
    url: "api/users",
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
    url : "/api/users",
    model : User
});