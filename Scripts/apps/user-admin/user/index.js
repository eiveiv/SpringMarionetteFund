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
    module.rolecollection = new RolesCollection(initialData);

    //router
    module.router = new UserRouter({module : module});

    module.rolerouter = new RoleRouter({module : module});

    //controller
    module.controller = new UserController({module : module});

    module.rolecontroller = new RoleController({module : module});

    return module;
};