package finder.model;

/**
 * Created by aze on 25/10/17.
 */
public class User {
    private String firstName;
    private String lastName;

//    public User() {
//        this.firstName = "";
//        this.lastName = "";
//    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

//    public User(User user){
//        this.firstName = user.getFirstName();
//        this.lastName = user.getLastName();
//    }
}
