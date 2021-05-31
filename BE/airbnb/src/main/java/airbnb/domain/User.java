package airbnb.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.*;

@Entity
@Getter
@NoArgsConstructor
@ToString
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    private String name;
    private String email;
    private String githubId;
    private String avatarUrl;

    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private final List<Booking> bookings = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private final List<Wish> wishes = new ArrayList<>();
}
