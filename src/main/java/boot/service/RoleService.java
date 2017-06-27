package boot.service;

import boot.model.Role;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Eivind on 25.06.2017.
 */
@Service
public class RoleService {

    public List<Role> getRoles() {
        List<Role> roles = new ArrayList<Role>();
        roles.add(new Role(1, "bigBaws", "all"));
        roles.add(new Role(2, "littleBaws", "some"));

        return roles;
    }
}
