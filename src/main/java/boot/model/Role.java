package boot.model;

/**
 * Created by Eivind on 25.06.2017.
 */
public class Role {

    private int id;
    private String roleName;
    private String authority;

    public Role(int id, String roleName, String authority) {
        this.id = id;
        this.roleName = roleName;
        this.authority = authority;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    public String getAuthority() {
        return authority;
    }

    public void setAuthority(String authority) {
        this.authority = authority;
    }

    @Override
    public String toString() {
        return "Role{" +
                "id=" + id +
                ", roleName='" + roleName + '\'' +
                ", authority='" + authority + '\'' +
                '}';
    }
}
