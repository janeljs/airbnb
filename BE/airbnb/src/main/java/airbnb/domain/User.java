package airbnb.domain;

import airbnb.domain.Booking;
import airbnb.domain.Wish;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    private String userName;
    private String password;
    private String name;
    private String email;
    private String profileImage;

    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private List<Booking> bookings = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private List<Wish> wishes = new ArrayList<>();

}
