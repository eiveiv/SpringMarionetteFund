package boot.rest;

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

    @GetMapping("/users")
    public String getUsers () {
        return gson.toJson(userService.getUsers());
    }

    @GetMapping("/user")
    public String getUser(@RequestParam(value = "id", required = true) String id) {
        return gson.toJson(userService.getUser(id));
    }


}
