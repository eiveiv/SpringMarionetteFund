package boot.model;

import java.time.LocalDate;

/**
 * Created by Eivind on 21.05.2017.
 */
public class User {

    public User(int id, String email, String name, int age, LocalDate createdDate) {
        this.email = email;
        this.name = name;
        this.age = age;
        this.id = id;
        this.createdDate = createdDate;
    }

    private int id;
    private String email;
    private String name;
    private int age;
    private LocalDate createdDate;

    public LocalDate getCreatedDate() {
        return createdDate;
    }

    public void setCreated(LocalDate createdDate) {
        this.createdDate = createdDate;
    }



    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", name='" + name + '\'' +
                ", age=" + age +
                ", createdDate=" + createdDate +
                '}';
    }
}
