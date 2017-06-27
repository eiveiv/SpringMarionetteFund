package boot.rest;

import boot.model.User;
import boot.service.UserService;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

//@CrossOrigin(origins = "http://localhost:63342")
@RestController
public class UserRest {

    @Autowired
    private UserService userService;

    Gson gson = new Gson();

    @GetMapping("/")
    public String index() {
        return "Velkommen";
    }

    @CrossOrigin(origins = "http://localhost:63342")
    @GetMapping("/users")
    public String getUsers () {
        System.out.println("Kom inn i users rest!");
        return gson.toJson(userService.getUsers());
    }

    @CrossOrigin(origins = "http://localhost:63342")
    @GetMapping("/user")
    public String getUser(@RequestParam(value = "id", required = true) String id) {
        User user = userService.getUser(id);
        System.out.println("User :  " + user.toString());
        System.out.println("Created :  " + user.getCreatedDate());
        String s = gson.toJson(user);
        return s;
    }


}
