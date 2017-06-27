package boot.rest;

import boot.model.User;
import boot.service.RoleService;
import boot.service.UserService;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RoleRest {

    @Autowired
    private RoleService roleService;

    Gson gson = new Gson();


    @CrossOrigin(origins = "http://localhost:63342")
    @GetMapping("/roles")
    public String getUsers () {
        System.out.println("Kom inn i roles rest!");
        return gson.toJson(roleService.getRoles());
    }




}
