package boot.service;

import boot.model.User;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Eivind on 21.05.2017.
 */
@Service
public class UserService {

    public User getUser(String id) {
        if (id.equals("1")) {
            return new User(1, "påsan@gmail.com", "påsan", 35);
        } else {
            return new User(2, "hansen@gmail.com", "hansen",33);
        }
    }

    public List<User> getUsers() {
        List<User> users = new ArrayList<User>();
        users.add(new User(1, "påsan@gmail.com", "påsan", 1));
        users.add(new User(2, "hansen@gmail.com", "hansen", 2));

        return users;
    }
}
