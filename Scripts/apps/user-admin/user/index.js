/**
 * Created by Eivind on 13.06.2017.
 */
var UserModule = function (setttings) {

    console.log("usermodule ; " + setttings);
    var initialData = setttings.initialData || [];

    var module = {};

    module.app = setttings.app || {};
    //collection
    module.collection = new UsersCollection(initialData);

    //router
    module.router = new UserRouter({module : module});

    //controller
    module.controller = new UserController({module : module});

    return module;
};